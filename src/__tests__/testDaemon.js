import Daemon from "../daemon.js";

describe('Class Daemon', () => {
    describe('Constructor', () => {
        test('CreatesDaemon instance correctly', () => {
        const daemon = new Daemon('Wery');

            expect(daemon).toHaveProperty('name', 'Wery');
            expect(daemon).toHaveProperty('type', 'Daemon');
            expect(daemon).toHaveProperty('health', 100);
            expect(daemon).toHaveProperty('level', 1);
            expect(daemon).toHaveProperty('attack', 10);
            expect(daemon).toHaveProperty('defence', 40);
        });

        test('Throws error for invalid name length', () => {
            expect(() => new Daemon('')).toThrowError('invalid name lenght');
            expect(() => new Daemon('a')).toThrowError('invalid name lenght');
            expect(() => new Daemon('SuperLongName')).toThrowError('invalid name lenght');
        });

    });
});