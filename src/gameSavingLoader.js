import json from "./parser.js";
import read from "./reader.js";

export default class GameSavingLoader {
    static async load() {
        try {
            const rawData = await read();
            const parseString = await json(rawData);

            const gameSavingObject = JSON.parse(parseString);
            return gameSavingObject;
        } catch (error) {
            throw error;
            
        }
    }
  }

