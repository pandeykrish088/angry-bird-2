class SlingShot {
constructor(bodyA,bodyB) {
var options = {
bodyA:bird.body,
bodyB:log5.body,
stiffness:0.05,
length:20
}
this.sling = Matter.Constraint.create(options);
World.add(world,this.sling);
    
}

display() {
var A = this.sling.bodyA.position;
var B = this.sling.bodyB.position;
line(A.x,A.y,B.x,B.y)

}
}