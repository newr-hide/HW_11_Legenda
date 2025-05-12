import Character from "../characters.js";
import Team from "../team.js";

describe('class Team', () => {
    describe('metod add', () => {
        test('Creates a new person ', () => {
            
        const character = new Character('Ali', 'Bowerman', 50, 20);
        const character2 = new Character('bill', 'Bowerman', 50, 20);
        const command = new Team();

        expect(() => command.add(character)).not.toThrow();
        expect(() => command.add(character2)).not.toThrow();
        
        expect(() => command.add(character)).toThrow(`Этот герой ${character.name} уже в команде!`);
    });
    });

    describe('metod addAll', () => {
        test('Creates a new team ', () => {

        const char1 = new Character('Ali', 'Bowerman', 50, 20);
        const char2 = new Character('bill', 'Bowerman', 50, 20);
                    
            const command = new Team();
            const res1 = command.addAll(char1, char2);
            const res2 = command.addAll(char1, char2, char1);
        expect(command.members.size).toBe(2);
        expect(command.members.size).toBe(2);
        });
    });
    describe('method toArray', () => {
    test('Converts members into array', () => {
        const char1 = new Character('Ali', 'Bowerman', 50, 20);
        const char2 = new Character('Bill', 'Bowerman', 50, 20);
        const command = new Team();

        command.addAll(char1, char2);
        const result = command.toArray();

        expect(result).toHaveLength(2); });
    });
});