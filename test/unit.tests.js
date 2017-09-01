import test from 'ava';
import { filterByKeys } from '../src/api';

test('Should return an empty object when input is also empty', (t) => {
  const result = filterByKeys({}, ['a', 'b', 'c']);
  t.deepEqual(result, {});
});

test('Should correctly filter provided object', (t) => {
  const obj = { a: 1, b: 2, c: 3 };
  const result = filterByKeys(obj, ['a', 'c']);
  t.deepEqual(result, { a: 1, c: 3 });
});
