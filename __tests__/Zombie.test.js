import Zombie from '../src/Zombie';

describe('Zombie', () => {
  it('should create a Zombie character', () => {
    const zombie = new Zombie('Shaun');
    expect(zombie.name).toBe('Shaun');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
