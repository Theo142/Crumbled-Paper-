class Paper{
	constructor(x,y,r)
	{
		var options = {restitution:0.3, friction:5, density:1, isStatic:false}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.image = loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			imageMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("Green");
            image(this.image, 0, 0, this.r,this.r);
			pop()
	}

}