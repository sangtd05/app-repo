import { add, greet } from './index';

test('add 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('greet returns hello message', () => {
  expect(greet('World')).toBe('Hello, World!');
});
