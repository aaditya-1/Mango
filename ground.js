class Ground{
    constructor(x,y,width,height){

        this.height = height;
        this.width = width;

        var opt = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,opt)
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position; 
        rect(pos.x,pos.y,this.width,this.height);
    }

}