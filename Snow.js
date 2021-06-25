class Snow{
    constructor(x,y,height,width){
        var options={friction:1,density:3} 
        this.image=loadImage("snow1.jpg")
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        image(this.image,0,0,width,height)
        pop()
        
    }
}
