import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const bowman = new Bowman('Legolas');
const swordsman = new Swordsman('Arthur');
const magician = new Magician('Merlin');
const daemon = new Daemon('Azazel');
const undead = new Undead('Nosferatu');
const zombie = new Zombie('Walker');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);

const charactersDiv = document.createElement('div');
charactersDiv.innerHTML = `
  <h2>Characters:</h2>
  <p>Bowman: ${bowman.name}</p>
  <p>Swordsman: ${swordsman.name}</p>
  <p>Magician: ${magician.name}</p>
  <p>Daemon: ${daemon.name}</p>
  <p>Undead: ${undead.name}</p>
  <p>Zombie: ${zombie.name}</p>
`;

document.body.appendChild(charactersDiv);
