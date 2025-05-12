import GameSavingLoader from '../gameSavingLoader.js';


describe('Test GameSavingLoader', () => {
    test('Successful loading game saving', async () => {
      const expectedResult = {
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1,
          name: 'Hitman',
          level: 10,
          points: 2000
        },
      };
  
      expect.assertions(1);
      const result = await GameSavingLoader.load();
      expect(result).toEqual(expectedResult);
    });
  
});