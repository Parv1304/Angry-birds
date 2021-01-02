class Bird
{
    constructor()
    {
        var option=
        {
            restitution:1,
            friction:1,
            density:1
        }
        this.body=Bodies.rectangle(200,200,50,50,option);
        this.width=50;
        this.heigth=50;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        //translate(pos.x,pos.y);
        fill("red");
        rectMode(CENTER);
        pos.x=mouseX;
        pos.y=mouseY;
        rect(pos.x,pos.y,50,50);
    }
}