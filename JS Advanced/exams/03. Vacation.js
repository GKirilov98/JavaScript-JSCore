class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = +budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (this.budget > +budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        let child = `${name}-${budget}`;
        if ( this.kids[`${grade}`] === undefined) {
            this.kids[`${grade}`] = [];
        }
        for (let i = 0; i < this.kids[`${grade}`].length; i++) {
            let nameE = this.kids[`${grade}`][i].split("-");
            if (nameE[0] === name){
                return `${name} is already in the list for this ${this.destination} vacation.`
            }
        }

        this.kids[`${grade}`].push(child);
        return this.kids[`${grade}`];
    }

    removeChild(name, grade){
       if (this.kids[`${grade}`] === undefined)
       {
           return `We couldn't find ${name} in ${grade} grade.`
       }

        let isIn = false;
        let index = -1;
        for (let i = 0; i < this.kids[`${grade}`].length; i++) {
            let nameE = this.kids[`${grade}`][i].split("-");
            if ( nameE[0] == name){
                isIn = true;
                index = i;
                break;
            }
        }

        if (!isIn){
            return `We couldn't find ${name} in ${grade} grade.`
        } else {
            this.kids[`${grade}`].splice(index,1);
            return this.kids[`${grade}`];
        }
    }
    //here

    get numberOfChildren(){
        let count = 0;
        Object.keys(this.kids).map((x) => {
            count += Object.values(this.kids[x]).length;
        });

        return count;
    }

    toString(){
        if (Object.keys(this.kids).length === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }
    }
}


// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation.registerChild('Gosho', 5, 2000);
// console.log(vacation.removeChild('Gosho', 2));;
//

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));

vacation.registerChild('Pesho', 6, 2400);
vacation.registerChild('Gosho', 5, 2000);

console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.numberOfChildren);;
