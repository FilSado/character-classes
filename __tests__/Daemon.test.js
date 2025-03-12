import Daemon from '../src/Daemon';

describe('Daemon', () => {
  it('should create a Daemon character', () => {
    const daemon = new Daemon('Azazel');
    expect(daemon.name).toBe('Azazel');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});
