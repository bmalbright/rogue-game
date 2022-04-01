import Entity from './Entity';

class Player extends Entity {
    intentory = [];

    attributes = {
        name: 'Player',
        ascii: '@',
        health: 10
    }

    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }

    add(item){
        this.intentory.push(item);
    }

    copyPlayer(){
        let newPlayer = new Player();
        Object.assign(newPlayer, this);
        return newPlayer;
    };
};




export default Player;