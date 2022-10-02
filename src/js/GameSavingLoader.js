import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const options = await json(data);
    const { id, created, userInfo } = { ...JSON.parse(options) };
    return new GameSaving(id, created, userInfo);
  }
}
