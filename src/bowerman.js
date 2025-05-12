import Character from "./characters.js";

export default class Bowerman extends Character {
    constructor(name, type, health, level) {
        super(name, 'Bowerman', health, level);
        this.attack = 25;
        this.defence = 25;
    }
}

// const x = new Bowerman('Ali');
// console.log(x);