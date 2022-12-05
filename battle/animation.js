// Setup
    const image=new Image();
    image.src='./img/battleMap.png';
    const playerImage=new Image();
    playerImage.src='./img/generic.png';
    let playerArmy=[];
    const background=new Sprite({
        position:{
            x:0,
            y:0
        },
        image: image
    });
const player=new Player({
    playerImage: playerImage
});
playerImage.style.width=player.width;
playerImage.style.height=player.height;
let impassableBoxes=[
    {
        position:{
            x:1000,
            y: 1000
        }
    },
    {
        position:{
            x: 50,
            y:50
        }
    }
];
let impassable=[];

storedPLayerArmy.forEach((soldier) => {
    playerArmy.push(
        new Soldier({
            sprite: generic,
            position: {
                x:soldier.position.x,
                y:soldier.position.y
            }
    }))
});
impassableBoxes.forEach((box)=>{
    impassable.push(new ImpassableMesh({position:{
            x:box.position.x,
            y:box.position.y
        }})
    );
})



function updateSprites(){
    playerArmy.forEach((soldier)=>{
        soldier.draw();
        if(rectangularCollision(soldier)){
            soldier.collision=true;
        }
        moveto(soldier, player);
    });
    impassable.forEach((box)=>{
        box.draw();
        if(rectangularCollision(box)){
            player.collision=true;
        }
    });
 
    // ai();

    player.draw();
}

// function ai(){

// }

const keys={
    w:{
        pressed:false
    },
    a:{
        pressed:false
    },
    s:{
        pressed:false
    },
    d:{
        pressed:false
    }
}

// animation loop
function animate(){
    window.requestAnimationFrame(animate);
    background.draw();

    playerMovement();
    updateSprites();
}

animate();

window.addEventListener('keydown', (event)=>{
    switch(event.key){
        case 'w':
            keys.w.pressed=true;
        break;
        case 'a':
            keys.a.pressed=true;
        break;
        case 's':
            keys.s.pressed=true;
        break;
        case 'd':
            keys.d.pressed=true;
        break;
        case 'shift':
            keys.shift.pressed=true;
        break;
    }
});
window.addEventListener('keyup', (event)=>{
    switch(event.key){
        case 'w':
            keys.w.pressed=false;
        break;
        case 'a':
            keys.a.pressed=false;
        break;
        case 's':
            keys.s.pressed=false;
        break;
        case 'd':
            keys.d.pressed=false;
        break;
        case 'shift':
            keys.shift.pressed=false;
        break;
    }
});