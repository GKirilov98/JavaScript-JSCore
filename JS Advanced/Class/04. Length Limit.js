class Stringer{
    constructor(word, length){
        this.innerString  = word;
        this.innerLength = +length;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        this.innerLength -= length;
        if (this.innerLength<0){
            this.innerLength = 0;
        }
    }

    toString(){
        let neededLength = +this.innerLength;
        let wordLength = this.innerString.length;
        if (wordLength <= neededLength){
            return this.innerString;
        } else {
            let result = this.innerString;
            return result.slice(0, neededLength) + "...";
        }
    }
}



let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

 test.decrease(3);
console.log(test.toString()); //Te...
test.decrease(5);
console.log(test.toString()); //...

 test.increase(4);
 console.log(test.toString()); //Test
