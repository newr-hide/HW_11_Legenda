import Character from './characters.js';

export default class Zombie extends Character {
    constructor(name, health, level) {
        super(name, 'Zombie', health, level);
        
        this.attack = 40;
        this.defence = 10;
    }
}

// const x = new Zombie('Ali');
// console.log(x);
// const y = x.levelUp();
// console.log(y)