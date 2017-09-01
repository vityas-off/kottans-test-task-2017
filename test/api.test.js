import test from 'ava';
import api from '../src/api';

import searchRes from './fixtures/searchResponse';
import userInfo from './fixtures/userInfo';

// eslint-disable-next-line
api.__Rewire__('http', {
  get(uri) {
    if (uri === '/search/users?q=vue') return { data: searchRes };
    if (uri === '/users/avajs') return { data: userInfo };
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
