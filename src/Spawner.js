import Loot from './Loot';
import Monster from './Monster';

const lootTable = [
    {name: 'Long Sword', color: 'darkgrey', ascii: '/', offset: {x: 6, y: 3}},
    {name: 'Health Potions', color: 'red', ascii: '!', offset: {x: 6, y: 3}},
    {name: 'Gold Coins', color: 'yellow', ascii: '$', offset: {x: 3, y: 3}},
    {name: 'Light Armor', color: 'lightgrey', ascii: '#', offset: {x: 4, y: 3}},
]

const monsterTable = [
    {name: 'Ogre', color: 'orange', ascii: 'O', offset: {x: 2, y: 3}, health: 7},
    {name: 'Goblin', color: 'brown', ascii: 'G', offset: {x: 1, y: 2}, health: 3},
    {name: 'Dragon', color: 'brightred', ascii: 'D', offset: {x: 4, y: 3}, health: 10},
    {name: 'Serpent', color: 'black', ascii: 'S', offset: {x: 2, y: 2}, health: 2},
    {name: 'Wraith', color: 'royalblue', ascii: 'W', offset: {x: 3, y: 2}, health: 8},
]

class Spawner {
    constructor(world) {
        this.world = world;
    }
    spawn(spawnCount, createEntity) {
        for(let count = 0; count < spawnCount; count++){
            let entity = createEntity();
            this.world.add(entity);
            this.world.moveToSpace(entity);
        }
    }

    spawnLoot(spawnCount) {
        this.spawn(spawnCount, () =>{
            return new Loot(
                getRandomInt(this.world.width -1),
                getRandomInt(this.world.height -1),
                this.world.tilesize,
                lootTable[getRandomInt(lootTable.length)]
            );
        });
    }

    spawnMonsters(spawnCount) {
        this.spawn(spawnCount, () =>{
            return new Monster(
                getRandomInt(this.world.width -1),
                getRandomInt(this.world.height -1),
                this.world.tilesize,
                monsterTable[getRandomInt(lootTable.length)]
            );
        });
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;