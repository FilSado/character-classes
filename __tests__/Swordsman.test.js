import Swordsman from '../src/Swordsman';

describe('Swordsman', () => {
  it('should create a Swordsman character with correct properties', () => {
    const name = 'Arthur';

    // Создаем эталонный объект (вне класса)
    const expectedSwordsman = {
      name: name,
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    // Создаем экземпляр класса
    const swordsman = new Swordsman(name);

    // Сравниваем экземпляр с эталонным объектом
    expect(swordsman).toEqual(expectedSwordsman);
  });

  it('should throw an error for invalid name length', () => {
    expect(() => new Swordsman('A')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
    expect(() => new Swordsman('ThisIsAVeryLongName')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
  });
});
