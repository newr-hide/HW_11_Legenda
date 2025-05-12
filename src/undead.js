import Character from './characters.js';

export default class Undead extends Character {
    constructor(name, health, level) {
        super(name, 'Undead', health, level);
        
        this.attack = 25;
        this.defence = 25;
    }
}

// const x = new Undead('Ali');
// console.log(x);