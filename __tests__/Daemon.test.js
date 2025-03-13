import Daemon from '../src/Daemon';

describe('Daemon', () => {
  it('should create a Daemon character with correct properties', () => {
    const name = 'Azazel';

    // Создаем эталонный объект (вне класса)
    const expectedDaemon = {
      name: name,
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    // Создаем экземпляр класса
    const daemon = new Daemon(name);

    // Сравниваем экземпляр с эталонным объектом
    expect(daemon).toEqual(expectedDaemon);
  });

  it('should throw an error for invalid name length', () => {
    expect(() => new Daemon('A')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
    expect(() => new Daemon('ThisIsAVeryLongName')).toThrowError(
      'Invalid name length. Name must be between 2 and 10 characters.'
    );
  });
});
