const today = 'Wednesday'; // Constant
let partOfDay; // variable

multiply(8, 5)
const now = new Date();

const daysOfWeek = [1, 2, 3, 4, 5, 6, 7]
const weekendDays = ['Saturday', 'Sunday']

function multiply(x, y) {
    console.log('ceva is done');
    return x * y;
}

const object = {
    name: 'Denis',
    getAge: function(currentYear, birthdayYear) {
        return currentYear - birthdayYear
    }
}

console.log(object.getAge(2022, 1987));
console.log('my name ==> ', object.name);
console.log('now is ', partOfDay);

detectPartOfDay();

console.log('now is ', partOfDay);

function detectPartOfDay() {
    const timeStamp = new Date();
    const currentTime = timeStamp.getTime();
    const afternoonTime = 12 * 60 * 60 * 1000;
    if (currentTime < afternoonTime) {
        partOfDay = 'morning';
    } else if (currentTime > afternoonTime) {
        partOfDay = 'afternoon';
    } else partOfDay = 'evening';
}



function demoEventClick(event) {
    console.log('Click is done', event)
}

class Person {
    constructor(_firstName, _lastName) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.fullName = function () {
            return this.firstName + ' ' + this.lastName;
        }
        this.arrowFullName = () => {
            return this.firstName + ' ' + this.lastName;
        }
    }
}

const person = new Person('Ion', 'Zapada');
console.log(person.firstName) // "Ion"
console.log('fullName', person.fullName())    // "Ion Zapada"
console.log('arrowFullName',person.arrowFullName()) // "Ion Zapada"


let me = {
    name: "Ion Zapada",
    thisInArrow:() => {
        console.log("My name is " + this.name);
    },
    thisInRegular(){
        console.log("My name is " + this.name);
    }
};
me.thisInArrow();  // "My name is Ion Zapada"
me.thisInRegular();   // My name is .Ion Zapada, .undefined, .My name is .... x2.
