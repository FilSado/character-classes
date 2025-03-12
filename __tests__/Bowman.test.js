import Bowman from '../src/Bowman';

describe('Bowman', () => {
  it('should create a Bowman character', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});
