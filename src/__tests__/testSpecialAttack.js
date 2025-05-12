import extractSpecialAttacks from "../specialAttack.js";
test('Extract special attacks', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowerman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
        { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' }
      ]
    };
   expect(extractSpecialAttacks(character)).toEqual([
      { id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...' },
      { id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...' }
    ]);
  });