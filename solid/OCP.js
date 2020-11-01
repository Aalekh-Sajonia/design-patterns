//open close principle
//A module,function, or class is open for extension but closed for modifications

class Car {
    constructor(...args) {
        Object.assign(this,{
            name:args[0],
            color: args[1],
            size: args[2],
        });
    }
}
//dont use arrow functions because it gets bind to constuctor
class FilterCar {
    filterByColor = (car,color) => {
        return car.filter(item => item.color === color);
    }

    filterByName = (car,name) => {
        return car.filter(item => item.name === name);
    }

    filterBySize = (car,size) => {
        return car.filter(item => item.size === size);
    }
}

const obj1 = new Car('nano','red',4);
const obj2 = new Car('toyota','white',5);
const obj3 = new Car('audi','white',5);

const fo = new FilterCar();

// console.log(fo.filterByColor([obj1,obj2,obj3],'red'));
// console.log(fo.filterBySize([obj1,obj2,obj3],5));

class Filter {
    filter(items,spec) {
        return items.filter(item => spec.isCorrect(item));
    }
}

class ColorSpecs {
    constructor(color) {
        this.color = color;
    }

    isCorrect(item) {
        return item.color === this.color;
    }
}

class SizeSpecs {
    constructor(size) {
        this.size = size;
    }

    isCorrect(item) {
        return item.size === this.size;
    }
}

class AndFilter {
    constructor(...args) {
        this.specs = args;
    }

    isCorrect(item) {
        return this.specs.every(x => x.isCorrect(item));
    }
}

let nf = new Filter();
// for(let x of nf.filter([obj1,obj2,obj3], new ColorSpecs('white'))) {
//     console.log(x);
// }

let af = new AndFilter(
    new ColorSpecs('white'),
    new SizeSpecs(5)
);

for(let x of nf.filter([obj1,obj2,obj3], af)) {
    console.log(x);
}