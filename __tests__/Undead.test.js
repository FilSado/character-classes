import Undead from '../src/Undead';

describe('Undead', () => {
  it('should create an Undead character', () => {
    const undead = new Undead('Morty');
    expect(undead.name).toBe('Morty');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});
