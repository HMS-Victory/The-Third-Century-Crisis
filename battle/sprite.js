class ImpassableMesh{
    constructor({position, parameters}){
        this.position=position
        this.width=50;
        this.height=50;
    }
    draw(){
        c.fillStyle='green';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class Sprite{
    constructor({
        position,
        image
    }){
        this.position=position;
        this.image=image;
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}