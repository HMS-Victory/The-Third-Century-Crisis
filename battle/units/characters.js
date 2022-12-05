// classes

class Player{
    constructor({
        playerImage
    }){
        this.velocity=2.1;
        this.run=this.velocity*1.5;
        this.width=50;
        this.height=50;
        this.position={
            x:canvas.width/2-this.width/2,
            y:canvas.height/2-this.height/2
        }
        this.image=playerImage;
        this.collision=true;
    }

    draw(){
        c.drawImage(this.image, this.position.x,this.position.y);
    }
}

class Soldier{
    constructor({
        sprite,
        position
    }){
        this.velocity=2;
        this.run=this.velocity*1.5;
        this.width=50;
        this.height=50;
        this.position=position;
        this.sprite=sprite;
        this.moving=false;
        this.visibility=500;
        this.collision=false;
    }

    draw(){
        c.drawImage(this.sprite, this.position.x,this.position.y);
    }
}

class item{
    constructor(){
            this.position={
                x:2,
                y:2
            }
            this.velocity={
                x:0,
                y:0
            }
            this.width=100;
            this.height=100;
    }

        draw(){
            c.fillStyle='red';
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
}
// Use this variable for all units of type 'generic'
const generic=new Image();
generic.src='./img/generic.png';

storedPLayerArmy=[
    {position:{
        x:0,
        y:0
    },
    type: generic,
    experience: 22,
},{
        position:{
            x:50,
            y:50,   
        },
        type: generic,
        experience: 22,
    }
]