class Box{
    constructor(x,y,width,height)
     { var options = 
        { 
            restitution:0.8
         } 
        this.body = Bodies.rectangle(x,y,width,height, options); 
        this.width = width; 
        this.height = height; 
        World.add(world, this.body);
    
    }
    display(){
        if(this.body.speed<3){
        var angle = this.body.angle
        push()
        rotate (angle)
        
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop ()
        }
        else{
            World.remove(world,this.body)
            push()
            this.visibilty=this.visibilty-5
            tint(255,this.visibilty)
             pop()
        }
    }
}