import { greet } from '../src/greeter';

test('greets a name', () => {
  expect(greet('World')).toBe('Hello, World!');
});
