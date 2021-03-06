class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(ball.position.x,ball.position.y,20,20);
      fill("red");
      strokeWeight(4);
      stroke("red");
      pop();
    }
  };