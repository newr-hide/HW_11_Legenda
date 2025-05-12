import Character from "../characters.js"; 

describe('class Character', () => {
    describe('constructor', () => {
        test('Creates a new character object with the correct parameters', () => {
            const character = new Character('Ali', 'Bowerman', 50, 20);
            
            expect(character).toHaveProperty('name', 'Ali');
            expect(character).toHaveProperty('type', 'Bowerman');
            expect(character).toHaveProperty('health', 100);
            expect(character).toHaveProperty('level', 1);
            expect(character).toHaveProperty('attack', 50);
            expect(character).toHaveProperty('defence', 20);
        });

        test('Ошибка при неверной длине имени', () => {
            expect(() => new Character('', 'Bowerman', 50, 20)).toThrowError('invalid name lenght');
            expect(() => new Character('A', 'Bowerman', 50, 20)).toThrowError('invalid name lenght');
            expect(() => new Character('VeryLongName', 'Bowerman', 50, 20)).toThrowError('invalid name lenght');
        });

        test('Ошибка при неправильном типе персонажа', () => {
            expect(() => new Character('Ali', 'Ogr', 50, 20)).toThrowError('Invalid type');
        });
    });

    describe('metods', () => {
        test('levelUp', () => {
            const character = new Character('Ali', 'Bowerman', 50, 20);
            character.levelUp();

            expect(character.level).toBe(2);
            expect(character.attack).toBeCloseTo(60);     
            expect(character.defence).toBeCloseTo(24);    
            expect(character.health).toBe(100);
        });

        test('damage', () => {
            const character = new Character('Nick', 'Bowerman', 50, 20);
            character.damage(80);

            expect(character.health).toBeLessThanOrEqual(100);
            expect(character.health).toBeGreaterThan(0);
        });

        test('Error when leveling up a dead character', () => {
            const character = new Character('Ali', 'Bowerman', 50, 20);
            character.health = 0;

            expect(() => character.levelUp()).toThrowError('Нельзя повысить уровень мёртвого персонажа.');
        });
    });
});