import { expect, jest, test } from '@jest/globals';
import json from '../parser';

jest.mock('../parser');
jest.mock('../reader');

test('', async () => {
  const data = [1, 5, 6];
  json.mockResolvedValue('object');
  await expect(json(data)).resolves.toEqual('object');
});

test('', async () => {
  json.mockRejectedValue(new Error('Async error message'));
  const data = [1, 5, 6];
  try {
    await json(data);
  } catch (e) {
    expect(e.message).toMatch('Async error message');
  }
});
