import Character from "./characters.js";

export default class Team {
    constructor () {
        this.members = new Set();
    }
    add(hero) {
        if(this.members.has(hero)) {
            throw new Error(`Этот герой ${hero['name']} уже в команде!`);
        }else {
            this.members.add(hero);
        }
    }
    addAll(...heroes) {
        heroes.forEach((hero) => {
            try {
                this.add(hero);
            }
           catch (e) {} 
        });
    }
    toArray(members) {
        return Array.from(this.members);
    }
}
// const character = new Character('Ali', 'Bowerman', 50, 20);
// const character2 = new Character('bill', 'Bowerman', 50, 20);
// const command = new Team();
// const team1 = command.add(character);
// const team2 = command.add(character2);
// // const team3 = command.add(character);
// console.log(command)

// const char1 =
//        {
//         name: 'Ali',
//         type: 'Bowerman',
//         health: 100,
//         level: 1,
//         attack: 50,
//         defence: 20
//       }
// const char2 =
//        {
//         name: 'bill',
//         type: 'Bowerman',
//         health: 100,
//         level: 1,
//         attack: 50,
//         defence: 20
//       }
      

// const command = new Team();
// command.addAll(char1, char2, char1)
// console.log(command)
// console.log(command.toArray(command))