import { expect, jest, test } from '@jest/globals';
import read from '../reader';

jest.mock('../parser');
jest.mock('../reader');

test('', async () => {
  read.mockResolvedValue([1, 2, 3]);
  await expect(read()).resolves.toEqual([1, 2, 3]);
});

test('', async () => {
  read.mockRejectedValue(new Error('Async error message'));
  try {
    await read();
  } catch (e) {
    expect(e.message).toMatch('Async error message');
  }
});
