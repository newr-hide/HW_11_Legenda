import Character from './characters.js';

export default class Swordsman extends Character {
    constructor(name, health, level) {
        super(name, 'Swordsman', health, level);
        
        this.attack = 40;
        this.defence = 10;
    }
}

// const x = new Swordsman('Nick');
// console.log(x);