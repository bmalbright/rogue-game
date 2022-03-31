import React, {useRef, useEffect, useState } from 'react';
import InputManager from './InputManager';
import Player from './Player';
import World from './World';

const Rogue = ({width, height, tilesize}) => {
    const canvasRef = useRef();
    const [player, setPlayer] = useState(new Player(1, 2, tilesize));
    const[world, setWorld] = useState( new World(width, height, tilesize));
    let inputManager = new InputManager();
    const handleInput = (action, data) => {
        console.log(`handle input: ${action}:${JSON.stringify(data)}`);
        let newPlayer = new Player();
        Object.assign(newPlayer, player);
        newPlayer.move(data.x, data.y);
        setPlayer(newPlayer);
    };

useEffect(() => {
    console.log('bind input');
    inputManager.bindKeys();
    inputManager.subscribe(handleInput);
    return () => {
        inputManager.unbindKeys();
        inputManager.unsubscribe(handleInput);
    }
})

    useEffect(() => {
        console.log('Draw to canvas');
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0,0, width * tilesize, height * tilesize);
        world.draw(context);
        player.draw(context);
    });
    return(
    <canvas 
        ref={canvasRef}
        width={width * tilesize}
        height={height * tilesize}
        style={{ border: '1px solid black' }}
        ></canvas>
    );
};

    export default Rogue;