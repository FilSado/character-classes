import Magician from '../src/Magician';

describe('Magician', () => {
  it('should create a Magician character with correct properties', () => {
    const name = 'Merlin';

    // Создаем эталонный объект (вне класса)
    const expectedMagician = {
      name: name,
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    // Создаем экземпляр класса
    const magician = new Magician(name);

    // Сравниваем экземпляр с эталонным объектом
    expect(magician).toEqual(expectedMagician);
  });

  it('should throw an error for invalid name length', () => {
    expect(() => new Magician('A')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
    expect(() => new Magician('ThisIsAVeryLongName')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
  });
});
