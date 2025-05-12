import Magician from "../magician";
import Daemon from "../daemon.js";

describe('Class Magician, Daemon', () => {
    describe('Attack', () => {
        test('DistanceAttack instance correctly', () => {
        const magician = new Magician('Wery');
        const daemon = new Daemon('Sor');
            expect(magician.getAttack(5)).toBe(6);
            expect(daemon.getAttack(5)).toBe(6);
        
        });
    });
    describe('Stoned attack', ()=> {
        test('DistanceAttack instance correctly stoned', () => {
            const magician = new Magician('Wery');
            magician.stoned = true;
            const daemon = new Daemon('Sor');
            daemon.stoned =true;
            expect(magician.getAttack(5)).toBe(0);
            expect(magician.getAttack(1)).toBe(10); 
            expect(daemon.getAttack(5)).toBe(0);
            expect(daemon.getAttack(1)).toBe(10);   
    });
    });
});

