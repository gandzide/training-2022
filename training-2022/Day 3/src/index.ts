class Helper {

    public component () : HTMLDivElement {
        const element = document.createElement('div')
        element.innerHTML = 'Hai noroc, Si noi la curs'
        return element
    }
}

let numar: number = 40;

class Job {
    private _salary: number;
    position: 'progrmator' | 'administrator';  // enum
    totalAmountOfSalary: number = 0;

    constructor (private _amount: number, private _position: 'progrmator' | 'administrator') {
        this.position = _position;
        this._salary = _amount;
    }

    get salary() {
        return this._salary - 10;
    }

    set salary(x: number) {
        this.totalAmountOfSalary += x;
        if (x > 0) {
            this._salary = x;
        } else {
            this._salary = 0;
            console.error('Salariu nu poate fi negativ!!!');
        }
    }

    someMethod () {
        this._salary = 1000;
    }
}
const job = new Job(1000, "administrator");
console.log(job) // {salary: 1000, position: 'administrator'}
job.salary = 200
job.salary = 1000;
job.salary = -20; // =>  1180

class Person {
    name: string; // primitive types
    age: number; // primitive types
    adult: boolean; // primitive type
    birthDate: Date; // type class
    randomProperty: any;
    job: Job
    constructor (
        private _name: string,
        private _birthYear: number,
        private _birthDate: Date,
        private _job: Job
    ) {
        this.name = _name;
        this.birthDate = _birthDate;
        // this.age = this._getAge(_birthYear);
        this._setAge();
    }
    private _getAge(birthYear: number): number {
        const currentDate: Date = new Date();
        const currentYear: number = currentDate.getFullYear();
        return currentYear - birthYear;
    }

    private _setAge() : void {
        const currentYear: number = (new Date()).getFullYear();
        const birthYear: number = this.birthDate.getFullYear();
        this.age = currentYear - birthYear;
    }
 }

const birthDate: Date = new Date('1986-01-24') // yyyy-mm-dd
const Dorel = new Person('Dorel', 1986, birthDate, job)
document.body.appendChild(new Helper().component())


