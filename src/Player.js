import Entity from './Entity';

class Player extends Enity {

    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }


    copyPlayer(){
        let newPlayer = new Player();
        Object.assign(newPlayer, this);
        return newPlayer;
    };
};




export default Player;