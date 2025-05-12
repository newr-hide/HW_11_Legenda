import Zombie from "../zombie";

describe('Class Zombie', () => {
    describe('Constructor', () => {
        test('CreatesMagician instance correctly', () => {
        const zombie = new Zombie('Wery');

            expect(zombie).toHaveProperty('name', 'Wery');
            expect(zombie).toHaveProperty('type', 'Zombie');
            expect(zombie).toHaveProperty('health', 100);
            expect(zombie).toHaveProperty('level', 1);
            expect(zombie).toHaveProperty('attack', 40);
            expect(zombie).toHaveProperty('defence', 10);
        });

        test('Throws error for invalid name length', () => {
            expect(() => new Zombie('')).toThrowError('invalid name lenght');
            expect(() => new Zombie('a')).toThrowError('invalid name lenght');
            expect(() => new Zombie('SuperLongName')).toThrowError('invalid name lenght');
        });

    });
});