class Ball{
    constructor(){
        var options ={
            restitution:0.4,
            frictionAir:0.01,
            density:0.5,
            
        }
        this.body=Bodies.circle(displayWidth/2,displayHeight/2,30,options);
        this.r=30;
        World.add(world,this.body);

    }
    display(){
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
         translate(pos.x,pos.y);
         rotate(angle);
        ellipse(0,0,this.r,this.r);
        pop();
        
    }
}