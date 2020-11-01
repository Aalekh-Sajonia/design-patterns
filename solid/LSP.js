// an obj of parent and child can be used interchanglbly without compromising the features
// one of the way to achieve it is using a more abstract class
class Shape {
    getArea() {
        return this.height * this.width;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }
}

class Square extends Shape {
    constructor() {
        super();
    }

    setHeight(height) {
        this.height = height;
        this.width = height;
    }

    setWidth(width) {
        this.height = width;
        this.width = width;
    }
}

const sq = new Square();
sq.setHeight(20);
const rec = new Rectangle(10,20);

const getArea = (shape) => {
    console.log(shape.getArea())
}

getArea(sq);
getArea(rec);