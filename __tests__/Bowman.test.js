import Bowman from '../src/Bowman';

describe('Bowman', () => {
  it('should create a Bowman object with correct properties', () => {
    // 1. Создаем эталонный объект
    const expectedBowman = {
      name: 'Legolas',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    // 2. Создаем реальный объект
    const actualBowman = new Bowman('Legolas');

    // 3. Сравниваем объекты
    expect(actualBowman).toEqual(expectedBowman);
  });
});
