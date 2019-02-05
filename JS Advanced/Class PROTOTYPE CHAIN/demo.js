function solve() {
    class Person {
        constructor(name, gender) {
            this.name = name;
            this.gender = gender;
        }

        talk() {
            console.log(`${this.name} is talking`);
        }
    }

    class Employer extends Person {
        constructor(name, gender, neededJob) {
            super(name, gender);
            this.neededJob = neededJob;
        }

        employing(){
            console.log("employing")
        }
    }

    class Developer extends Employer {
        constructor(name, age, neededJob, kind) {
            super(name, age, neededJob);
            this.kind = kind;
        }

        developer(){
            console.log("developing");
        }

        toString(){
            console.log(arguments);
        }
    }

    return {Person, Employer, Developer};
}

let Developer = solve().Developer;
let Employer = solve().Employer;
let p = new Developer("Peso", 20, true, "Java");
//p.employing();
//console.log(p.species);