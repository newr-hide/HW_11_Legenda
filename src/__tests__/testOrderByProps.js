import orderByProps from '../tables.js';

describe('orderByProps', () => {
    describe('sorting', () => {
        test('Proper sorting', () => {
            const swordman = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
            
            const sortedResult = orderByProps(swordman, ['name', 'level']);
        
            expect(sortedResult.map(pair => pair[0])).toEqual([
                'name', 
                'level', 
                'attack', 
                'defence',
                'health'
            ]);
        });
    });
});