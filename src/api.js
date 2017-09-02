/* eslint-disable no-param-reassign */
import axios from 'axios';
import escape from 'escape-html';

const http = axios.create({
  baseURL: 'https://api.github.com',
});

http.interceptors.response.use(null, (err) => {
  throw err;
});

http.defaults.headers.common.Accept = 'application/vnd.github.mercy-preview+json';

export const filterByKeys = (user, keys) =>
  Object.keys(user).reduce((acc, key) => {
    if (keys.includes(key)) acc[key] = user[key];
    return acc;
  }, {});

export default {
  async searchUsers(query, avatarSize = 50) {
    try {
      const { data } = await http.get(`/search/users?q=${query}`);
      const users = data.items
        .map(user => filterByKeys(user, ['login', 'avatar_url', 'type']))
        .map((user) => {
          user.avatar_url += `&s=${avatarSize}`;
          return user;
        });
      return users;
    } catch (err) {
      throw new Error(`An error occurred during search request. ${err.message}`);
    }
  },
  async getUserInfo(query) {
    try {
      const { data } = await http.get(`/users/${query}`);
      return filterByKeys(data, [
        'avatar_url',
        'name',
        'type',
        'email',
        'login',
        'location',
        'public_repos',
      ]);
    } catch (err) {
      throw new Error(`Failed to fetch ${query} data. ${err.message}`);
    }
  },
  async getUserRepos(user, page = 1) {
    try {
      const [repos] = await Promise.all([
        http.get(`/users/${user}/repos?page=${page}`),
        this.getEmojis(),
      ]);
      return repos.data
        .map(repo =>
          filterByKeys(repo, [
            'name',
            'description',
            'fork',
            'language',
            'updated_at',
            'stargazers_count',
            'open_issues_count',
            'topics',
          ]),
        )
        .map((repo) => {
          if (!repo.description) return repo;
          let result = escape(repo.description);
          if (repo.description.length > 100) {
            result = `${result.substr(0, 97).trim()}...`;
          }
          Object.keys(this.emojis).forEach((emoji) => {
            result = result.replace(
              new RegExp(`:${emoji}:`, 'g'),
              `<img class=emoji src="${this.emojis[emoji]}" alt="${emoji}">`,
            );
          });
          repo.description = result;
          return repo;
        });
    } catch (err) {
      throw new Error(`Failed to fetch ${user}'s repositories. ${err.message}`);
    }
  },
  async getRepoDetails(name, user, avatarSize = 30) {
    try {
      const repo = `/repos/${user}/${name}`;
      const [main, contributorsFull, languagesFull, pullsFull] = await Promise.all([
        http.get(repo),
        http.get(`${repo}/contributors`),
        http.get(`${repo}/languages`),
        http.get(`${repo}/pulls?sort=popularity`),
      ]).then(r => r.map(res => res.data));
      const { source, html_url } = filterByKeys(main, ['source', 'html_url']);
      const forkedFrom = source ? { name: source.name, url: source.html_url } : null;
      const contributors = contributorsFull
        .slice(0, 3)
        .map(c => filterByKeys(c, ['login', 'contributions', 'avatar_url']))
        .map((c) => {
          c.avatar_url += `&s=${avatarSize}`;
          return c;
        });
      const languages = Object.keys(languagesFull).reduce((acc, lang) => {
        if (languagesFull[lang] > 1024) acc.push({ [lang]: languagesFull[lang] });
        return acc;
      }, []);
      const pulls = pullsFull.slice(0, 5).map(p => filterByKeys(p, ['html_url', 'title']));
      return { url: html_url, forkedFrom, contributors, languages, pulls };
    } catch (err) {
      throw new Error(`Failed to fetch ${name} repository info. ${err.message}`);
    }
  },
  async getEmojis() {
    if (this.emojis) {
      return this.emojis;
    }
    try {
      const { data } = await http.get('/emojis');
      this.emojis = data;
      return data;
    } catch (err) {
      return {};
    }
  },
};
