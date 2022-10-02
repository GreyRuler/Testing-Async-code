import { expect, test } from '@jest/globals';
import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('should compare the loaded object', async () => {
  const expected = new GameSaving(
    9,
    1546300800,
    {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  );
  const received = await GameSavingLoader.load();
  expect(received).toEqual(expected);
});
