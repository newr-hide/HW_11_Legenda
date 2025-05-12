import Bowerman from '../bowerman.js';

describe('Class Bowerman', () => {
    describe('Constructor', () => {
        test('Creates a new Bowerman instance correctly', () => {
            const bowerman = new Bowerman('Wery');

            expect(bowerman).toHaveProperty('name', 'Wery');
            expect(bowerman).toHaveProperty('type', 'Bowerman');
            expect(bowerman).toHaveProperty('health', 100);
            expect(bowerman).toHaveProperty('level', 1);
            expect(bowerman).toHaveProperty('attack', 25);
            expect(bowerman).toHaveProperty('defence', 25);
        });

        test('Throws error for invalid name length', () => {
            expect(() => new Bowerman('a')).toThrowError('invalid name lenght');
            expect(() => new Bowerman('SuperLongName')).toThrowError('invalid name lenght');
        });
    });
});