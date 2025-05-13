import json from "./parser.js";
import read from "./reader.js";

class GameSaving {
    constructor(data) {
      this.id = data.id;
      this.created = data.created;
      this.userInfo = data.userInfo;
    }
  }

export default class GameSavingLoader {
    static load() {
      return read()
        .then(fileData => json(fileData))
        .then(stringifiedData => JSON.parse(stringifiedData)) 
        .then(parsedData => new GameSaving(parsedData)) 
        .catch(error => { throw error }); 
    }
  }

  GameSavingLoader.load()
  .then(saving => console.log('Загружено:', saving))
  .catch(error => console.error('Ошибка загрузки:', error));

// export default class GameSavingLoader {
//     static async load() {
//         try {
//             const rawData = await read();
//             const parseString = await json(rawData);

//             const gameSavingObject = JSON.parse(parseString);
//             return gameSavingObject;
//         } catch (error) {
//             throw error;
            
//         }
//     }
//   }

