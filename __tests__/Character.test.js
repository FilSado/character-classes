import Character from '../src/Character';

describe('Character', () => {
  it('should create a Character with valid name and type', () => {
    // 1. Создаем эталонный объект
    const expectedCharacter = new Character('Hero', 'Bowman');


    // 2. Создаем реальный объект
    const actualCharacter = new Character('Hero', 'Bowman');

    // 3. Сравниваем объекты
    expect(actualCharacter).toEqual(expectedCharacter);
  });

  it('should throw an error for invalid name length (too short)', () => {
    expect(() => new Character('H', 'Bowman')).toThrow('Invalid name length'); // Изменен текст ошибки
  });

  it('should throw an error for invalid name length (too long)', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Invalid name length'); // Добавлен новый тест
  });

  it('should throw an error for invalid character type', () => {
    expect(() => new Character('Hero', 'InvalidType')).toThrow('Invalid character type'); // Добавлен новый тест
  });
});
