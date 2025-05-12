import Undead from "../undead";

describe('Class Undead', () => {
    describe('Constructor', () => {
        test('CreatesMagician instance correctly', () => {
        const undead = new Undead('Wery');

            expect(undead).toHaveProperty('name', 'Wery');
            expect(undead).toHaveProperty('type', 'Undead');
            expect(undead).toHaveProperty('health', 100);
            expect(undead).toHaveProperty('level', 1);
            expect(undead).toHaveProperty('attack', 25);
            expect(undead).toHaveProperty('defence', 25);
        });

        test('Throws error for invalid name length', () => {
            expect(() => new Undead('')).toThrowError('invalid name lenght');
            expect(() => new Undead('a')).toThrowError('invalid name lenght');
            expect(() => new Undead('SuperLongName')).toThrowError('invalid name lenght');
        });

    });
});