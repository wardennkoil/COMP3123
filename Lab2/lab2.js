const gretter  = (myArray, counter) => {
    let greetText = 'Hello ';
    for (let index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index]);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);

var values = [1, 60, 34, 30, 20, 5];

const lessThan20 = values.filter(value => value < 20);
console.log(lessThan20);

var array = [1, 2, 3, 4];

const calculatedSum = array.reduce((a, b) => a + b, 0);
const calculatedProduct = array.reduce((a, b) => a * b, 1);

console.log(calculatedSum);
console.log(calculatedProduct);

class Car {
    constructor(brand, year) {
        this.carname = brand;
        this.year = year;
    }

    details(){
        return 'Model: ' + this.carname + ' ' + this.year;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);

console.log(car2.details());
class Sedan extends Car {
    constructor(brand, year, balance) {
        super(brand, year);
        this.balance = balance;
    }

    info(){
        return this.carname + ' has a balance of $' + this.balance;
    }
}

const sedan = new Sedan('Volvo SD', 2018, 30000);

console.log(sedan.info())
