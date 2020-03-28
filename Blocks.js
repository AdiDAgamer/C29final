class Block
{
    constructor(x, y)
    {
        var options =
        {
            restitution: 1.5
        }
        //this.body1 = loadImage("animatons/enemy.png");
        this.body = Bodies.rectangle(x, y, 25, 30, options);
        this.width = 25;
        this.height = 30;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0, 255, 0);
        rect(0, 0, this.width, this.height);
        /*imageMode(CENTER);
        image(this.body1, 0, 0);*/
        pop();
    }
}