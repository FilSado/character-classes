import Zombie from '../src/Zombie';

describe('Zombie', () => {
  it('should create a Zombie character with correct properties', () => {
    const name = 'Carl';

    // Создаем эталонный объект (вне класса)
    const expectedZombie = {
      name: name,
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    // Создаем экземпляр класса
    const zombie = new Zombie(name);

    // Сравниваем экземпляр с эталонным объектом
    expect(zombie).toEqual(expectedZombie);
  });

  it('should throw an error for invalid name length', () => {
    expect(() => new Zombie('A')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
    expect(() => new Zombie('ThisIsAVeryLongName')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
  });
});
