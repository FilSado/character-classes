import Undead from '../src/Undead';

describe('Undead', () => {
  it('should create an Undead character with correct properties', () => {
    const name = 'Bob';

    // Создаем эталонный объект (вне класса)
    const expectedUndead = {
      name: name,
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    // Создаем экземпляр класса
    const undead = new Undead(name);

    // Сравниваем экземпляр с эталонным объектом
    expect(undead).toEqual(expectedUndead);
  });

  it('should throw an error for invalid name length', () => {
    expect(() => new Undead('A')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
    expect(() => new Undead('ThisIsAVeryLongName')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
  });
});
