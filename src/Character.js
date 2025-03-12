        export default class Character {
            constructor(name, type) {
              if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
                throw new Error('Invalid name length. Name must be between 2 and 10 characters.');
              }
  
              const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
              if (!allowedTypes.includes(type)) {
                throw new Error('Invalid character type.  Allowed types are Bowman, Swordsman, Magician, Daemon, Undead, and Zombie.');
              }
  
              this.name = name;
              this.type = type;
              this.health = 100;
              this.level = 1;
              this.attack = 0; 
              this.defence = 0; 
            }
  
            levelUp() {
              if (this.health <= 0) {
                throw new Error('Cannot level up a dead character.');
              }
  
              this.level += 1;
              this.attack *= 1.2;
              this.defence *= 1.2;
              this.health = 100;
            }
  
            damage(points) {
              if (points < 0) {
                throw new Error('Damage points cannot be negative.');
              }
              const damageDealt = points * (1 - this.defence / 100);
              this.health -= damageDealt;
  
              if (this.health < 0) {
                this.health = 0;
              }
            }
          }
  
