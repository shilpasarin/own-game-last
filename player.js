class Player {
    constructor(x,y){
        var options ={
            restitution:0.4,
            frictionAir:0.01,
            density:0.5,
            
        }
        this.body=Bodies.rectangle(x,y,50,100,options);
        this.image=loadImage("images/p1stand.png");
        this.width=50;
        this.height=100;
        World.add(world,this.body);

    }
    display(){
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
         translate(pos.x,pos.y);
         rotate(angle);
         imageMode(CENTER);
        image(this. image,0,0,this.width,this.height);
        pop();
        
    }
}