import test from 'ava';
import api from '../src/api';

import searchRes from './fixtures/searchResponse';
import userInfo from './fixtures/userInfo';
import userRepos from './fixtures/userRepos';
import emojis from './fixtures/emojis';
import yarn from './fixtures/repo';
import contributors from './fixtures/contributors';
import languages from './fixtures/languages';
import pulls from './fixtures/pulls';

// eslint-disable-next-line
api.__Rewire__('http', {
  get(uri) {
    if (uri === '/search/users?q=vue') return { data: searchRes };
    if (uri === '/users/avajs') return { data: userInfo };
    if (uri === '/users/brunch/repos?page=1') return { data: userRepos };
    if (uri === '/emojis') return { data: emojis };
    if (uri === '/repos/yarnpkg/yarn') return { data: yarn };
    if (uri === '/repos/yarnpkg/yarn/contributors') return { data: contributors };
    if (uri === '/repos/yarnpkg/yarn/languages') return { data: languages };
    if (uri === '/repos/yarnpkg/yarn/pulls?sort=popularity') return { data: pulls };
    throw new Error(`${uri} not mocked!`);
  },
});

test('Search return 30 users', async (t) => {
  const res = await api.searchUsers('vue');
  t.is(res.length, 30);
});

test('Search results has only desired keys', async (t) => {
  const res = await api.searchUsers('vue');
  t.true(
    res.every((el) => {
      const k = Object.keys(el);
      return (
        k.includes('login') && k.includes('avatar_url') && k.includes('type') && k.length === 3
      );
    }),
  );
});

test('Avatar length is correctly adding to result', async (t) => {
  const res = await api.searchUsers('vue', 123);
  t.true(res.every(el => el.avatar_url.slice(-6) === '&s=123'));
});

test('User info should be parsed correctly', async (t) => {
  const res = await api.getUserInfo('avajs');
  t.is(res.avatar_url, 'https://avatars3.githubusercontent.com/u/8527916?v=4');
  t.is(res.name, 'AVA');
  t.is(res.login, 'avajs');
  t.is(res.type, 'Organization');
  t.is(res.email, 'sindresorhus@gmail.com');
  t.is(res.public_repos, 31);
  t.is(res.location, null);
});

test('User repos should be parsed correctly', async (t) => {
  const res = await api.getUserRepos('brunch');
  t.is(res.length, 30);
  t.true(
    res.every((el) => {
      const k = Object.keys(el);
      return (
        k.includes('name') &&
        k.includes('description') &&
        k.includes('fork') &&
        k.includes('language') &&
        k.includes('updated_at') &&
        k.includes('stargazers_count') &&
        k.includes('open_issues_count') &&
        k.includes('topics')
      );
    }),
  );

  const repo = res.find(r => r.name === 'brunch');
  t.is(
    repo.description,
    '<img class=emoji src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f374.png?v7" alt="fork_and_knife"> Fast front-end web app build tool with simple declarative config, seamless incre...',
  );
  t.false(repo.fork);
  t.is(repo.updated_at, '2017-09-02T00:49:06Z');
  t.is(repo.stargazers_count, 6125);
  t.is(repo.language, 'JavaScript');
  t.is(repo.open_issues_count, 100);
  t.deepEqual(repo.topics, ['build-automation', 'javascript', 'pipeline', 'workflow']);
});

test('Repo details should be parsed correctly', async (t) => {
  const res = await api.getRepoDetails('yarn', 'yarnpkg');
  t.is(res.url, 'https://github.com/yarnpkg/yarn');
  t.true(
    res.contributors.every((c) => {
      const k = Object.keys(c);
      return k.includes('login') && k.includes('avatar_url') && k.includes('contributions');
    }),
  );
  t.true(res.languages.length === 4 && res.languages.every(lang => Object.keys(lang).length === 1));
  t.true(
    res.pulls.length === 5 &&
      res.pulls.every((p) => {
        const k = Object.keys(p);
        return k.includes('html_url') && k.includes('title');
      }),
  );
});
