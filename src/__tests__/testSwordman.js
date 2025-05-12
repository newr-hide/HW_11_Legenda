import Swordsman from "../swordsman";

describe('Class Swordsman', () => {
    describe('Constructor', () => {
        test('CreatesMagician instance correctly', () => {
        const swordsman = new Swordsman('Wery');

            expect(swordsman).toHaveProperty('name', 'Wery');
            expect(swordsman).toHaveProperty('type', 'Swordsman');
            expect(swordsman).toHaveProperty('health', 100);
            expect(swordsman).toHaveProperty('level', 1);
            expect(swordsman).toHaveProperty('attack', 40);
            expect(swordsman).toHaveProperty('defence', 10);
        });

        test('Throws error for invalid name length', () => {
            expect(() => new Swordsman('')).toThrowError('invalid name lenght');
            expect(() => new Swordsman('a')).toThrowError('invalid name lenght');
            expect(() => new Swordsman('SuperLongName')).toThrowError('invalid name lenght');
        });

    });
});