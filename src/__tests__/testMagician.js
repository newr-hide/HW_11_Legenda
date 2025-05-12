import Magician from "../magician";

describe('Class Magician', () => {
    describe('Constructor', () => {
        test('CreatesMagician instance correctly', () => {
        const magician = new Magician('Wery');

            expect(magician).toHaveProperty('name', 'Wery');
            expect(magician).toHaveProperty('type', 'Magician');
            expect(magician).toHaveProperty('health', 100);
            expect(magician).toHaveProperty('level', 1);
            expect(magician).toHaveProperty('attack', 10);
            expect(magician).toHaveProperty('defence', 40);
        });

        test('Throws error for invalid name length', () => {
            expect(() => new Magician('')).toThrowError('invalid name lenght');
            expect(() => new Magician('a')).toThrowError('invalid name lenght');
            expect(() => new Magician('SuperLongName')).toThrowError('invalid name lenght');
        });

    });
});