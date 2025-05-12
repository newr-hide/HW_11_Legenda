import GameSavingLoader from './gameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
    console.log('Успешно загрузили сохранение:', saving);
    // saving объект класса GameSaving
  }, (error) => {
    console.log('Ошибка загрузки сохранения', error);
    // ...
  });