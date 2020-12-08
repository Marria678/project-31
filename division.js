class Divisions {
    constructor(x) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, 650,10,350, options);
        this.w = 10
        this.h = 350
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};