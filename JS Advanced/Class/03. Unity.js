class Rat {
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRats){
      if(otherRats instanceof Rat){
            this.unitedRats.push(otherRats);
      }
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
        let result = this.name ;
        for (let i = 0; i < this.unitedRats.length; i++) {
            result += "\n##" + this.unitedRats[i];
        }
        return result;
    }
}


let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
console.log(test.toString());
