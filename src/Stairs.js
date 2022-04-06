import Entity from "./Entity";
import Spawner from "./Spawner";

class Stairs extends Entity {
  attributes = {
    name: "Stairs",
    color: "pink",
    ascii: "Z",
    offset: { x: 2, y: 2 },
  };

  action(verb, world) {
    if (verb === "bump") {
      world.addToHistory("You move down stairs...");
      world.createCellularMap();
      world.player.x = 0;
      world.player.y = 0;
      world.moveToSpace(world.player);
      world.entities = world.entities.filters((e) => e === world.player);
      let spawner = new Spawner(world);
      spawner.spawnLoot(10);
      spawner.spawnMonsters(7);
      spawner.spawnStairs();
    }
  }
}

export default Stairs;
