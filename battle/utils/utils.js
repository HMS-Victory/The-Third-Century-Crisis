// const impassableBox=document.querySelector('.impassable');

// we need to make it so that the sides that evaluate false are impassable

function rectangularCollision(unit){
    return (player.position.x + player.width >= unit.position.x &&//approach from the left
        player.position.x <= unit.position.x + unit.width &&//approach from the right
        player.position.y + player.height >=unit.position.y &&//down
        player.position.y <= unit.position.y + unit.height//up
    )
}

// if the enemy detects an enemy, or you, the player within a dynamic distance
// It will move to that unit.
function detectRadius(unit, target){
    return (unit.position.x+unit.width+unit.visibility>=target.x ||
            unit.position.y+unit.height+unit.visibility>=target.y ||
            unit.position.y+unit.visibility<=target.y ||
            unit.position.x+unit.visibility<=target.x
    )
}

function moveto(unit, target){ 
    let x;
    let y;
    if(unit.position.x<target.position.x){
        x=target.position.x-unit.position.x;
    }else{
        x=unit.position.x-target.position.x;
    }
    if(unit.position.y<target.position.y){
        y=target.position.y-unit.position.y
    }else{
        y=unit.position.y-target.position.y;
    }
    if(x<y && target.position.x<unit.position.x){
        if(!unit.collision){
            unit.position.y-=unit.velocity;
            console.log(unit.collision);
        }else{
            unit.position.y+=unit.velocity;
            unit.collision=false;
            console.log(unit.collision);
        }
    }else if(x<y && target.position.x>unit.position.x){
        if(!unit.collision){
            unit.position.y+=unit.velocity;
            console.log(unit.collision);
        }else{
            unit.position.y-=unit.velocity;
            unit.collision=false;
            console.log(unit.collision);
        }
    }else if(x>y && target.position.y <unit.position.y){
        if(!unit.collision){
            unit.position.x-=unit.velocity;
            console.log(unit.collision);
        }else{
            unit.position.x+=unit.velocity;
            unit.collision=false;
            console.log(unit.collision);
        } 
    }else if(x>y && target.position.y > unit.position.y){
        if(!unit.collision){
            unit.position.x +=unit.velocity;
            console.log(unit.collision);
        }else{
            unit.position.x -=unit.velocity;
            unit.collision=false;
            console.log(unit.collision);
        }
    }else if(x===y && target.position.y > unit.position.y){
        if(!unit.collision){
            unit.position.x +=unit.velocity/2;
            unit.position.y +=unit.velocity/2;
            console.log(unit.collision);
        }else{
            unit.position.x -=unit.velocity/2;
            unit.position.y -=unit.velocity/2;
            unit.collision=false;
            console.log(unit.collision);
        }
    }else if(x===y && target.position.y < unit.position.y){
        if(!unit.collision){
            unit.position.x -=unit.velocity/2;
            unit.position.y -=unit.velocity/2;
            console.log(unit.collision);
        }else{
            unit.position.x +=unit.velocity/2;
            unit.position.y +=unit.velocity/2;
            unit.collision=false;
            console.log(unit.collision);
        }
    }
}

function playerMovement(){
    if(keys.w.pressed){
        if(!player.collision){
        background.position.y+=player.velocity;
        impassable.forEach((box)=>{
            box.position.y+=player.velocity;
        }); 
        playerArmy.forEach((soldier)=>{
            soldier.position.y+=player.velocity;
        })
    }else{
        background.position.y-=player.velocity;
        impassable.forEach((box)=>{
            box.position.y-=player.velocity;
        }); 
        playerArmy.forEach((soldier)=>{
            soldier.position.y-=player.velocity;
        });
        player.collision=false;
    }
    }
    else if(keys.s.pressed){
        if(!player.collision){
        background.position.y-=player.velocity;
        impassable.forEach((box)=>{
            box.position.y-=player.velocity;
        }); 
        playerArmy.forEach((soldier)=>{
            soldier.position.y-=player.velocity;
        });
    }else{
        background.position.y+=player.velocity;
        impassable.forEach((box)=>{
            box.position.y+=player.velocity;
        }); 
        playerArmy.forEach((soldier)=>{
            soldier.position.y+=player.velocity;
        });
        player.collision=false;
    }      
    }
    else if(keys.a.pressed){
        if(!player.collision){
        background.position.x+=player.velocity;
        impassable.forEach((box)=>{
            box.position.x+=player.velocity;
        }); 
        playerArmy.forEach((soldier)=>{
            soldier.position.x+=player.velocity;
        });
    }else{
        background.position.x-=player.velocity;
        impassable.forEach((box)=>{
            box.position.x-=player.velocity;
        }); 
        playerArmy.forEach((soldier)=>{
            soldier.position.x-=player.velocity;
        });
        player.collision=false;
    }      
    }
    else if(keys.d.pressed){
        if(!player.collision){
        background.position.x-=player.velocity
        impassable.forEach((box)=>{
            box.position.x-=player.velocity;
        }); 
        playerArmy.forEach((soldier)=>{
            soldier.position.x-=player.velocity;
        });
    }else{
        background.position.x+=player.velocity
        impassable.forEach((box)=>{
            box.position.x+=player.velocity;
        }); 
        playerArmy.forEach((soldier)=>{
            soldier.position.x+=player.velocity;
        });
        player.collision=false;
    }
    }
}
