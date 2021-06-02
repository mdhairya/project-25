class Paper
{
	constructor(x,y)
	{

		var options={
			isStatic:false,
		    restitution:0.3,
            friction:0,
			density:1.2
			}

		this.x=x;
		this.y=y;
		
		this.image=loadImage("paper.png")
		this.Paper=Bodies.circle(x,y,10)

		
	
	}
    display(){
	    var pos = this.Paper.position

		push()
		translate();
		rectMode(CENTER)
		image(this.image,pos.x,pos.y,100,100)
		pop()


	}


}