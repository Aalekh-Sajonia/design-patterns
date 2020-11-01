// seperate interfaces in seperate small parts so that only thode which are needed can be implemented by the class which is
// implementing that interface

// hacky way to build abstract class

class Abstract {
    constructor() {
        if(this.constructor.name === 'Abstract') {
            throw new Error("Can not create object of an abstract class");
        }
    }
}

// code

class Entity {
    constructor(name) {
        this.name = name;
    }
}

const run = {
    run: () => {
        console.log("I can run");
    }
}

const swim = {
    swim: () => {
        console.log("I can swim");
    }
}

const fly = {
    fly: () => {
        console.log("I can fly");
    }
}

class Car extends Entity {
    constructor(name) {
        super(name);
    }
}

class Plane extends Entity {
    constructor(name) {
        super(name);
    }
}

class Submarine extends Entity {
    constructor(name) {
        super(name);
    }
}

Object.assign(Car.prototype,run);

const nano = new Car('Nano');
nano.run();
// nano.swim(); will give error

Object.assign(Plane.prototype,fly);

const a320 = new Plane('A320');

a320.fly();
