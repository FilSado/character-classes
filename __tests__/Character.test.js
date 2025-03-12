import Character from '../src/Character';

describe('Character', () => {
  it('should create a Character with valid name and type', () => {
    const character = new Character('Hero', 'Bowman');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
  });

  it('should throw an error for invalid name length (too short)', () => {
    expect(() => new Character('H', 'Bowman')).toThrow('Invalid name length. Name must be between 2 and 10 characters.');
  });
});
