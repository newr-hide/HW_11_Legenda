import Character from './characters.js';

export default class Daemon extends Character {
    constructor(name, health, level, stoned) {
        super(name, 'Daemon', health, level, stoned);
        
        this.attack = 10;
        this.defence = 40;
    }

    setAttack(attackValue) {
        this.attack = attackValue;
    }

    getAttack(distance) {
        let attack = this.attack;
        if(distance > 0 && distance <= 5) {
            attack *= (1 - (distance - 1) * 0.1);
            if (this.stoned) {
                attack -= Math.log2(distance) * 5;
            }
        } 
        return Math.max(attack, 0);
    }
}

// const x = new Daemon('Ali');
// console.log(x);