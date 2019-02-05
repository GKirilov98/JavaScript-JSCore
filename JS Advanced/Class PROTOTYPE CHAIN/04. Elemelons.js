function fantasticFour() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("Abstract class cannot be instantiated directly")
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        toString() {
            let element = this.constructor.name.slice(0, this.constructor.name.length - 5);
            let elemelonSort = this.melonSort;
            let elemelonElementIndex = this._elementIndex;

            return `Element: ${element}\nSort: ${elemelonSort}\nElement Index: ${elemelonElementIndex}`;
        }
    }

    class Watermelon extends Melon {
        get elementIndex() {
            return this._elementIndex;
        }

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
        }
    }

    class Firemelon extends Melon {
        get elementIndex() {
            return this._elementIndex;
        }

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
        }
    }

    class Earthmelon extends Melon {
        get elementIndex() {
            return this._elementIndex;
        }

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
        }
    }

    class Airmelon extends Melon {
        get elementIndex() {
            return this._elementIndex;
        }

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementsArr = ["Fire", "Earth", "Air", "Water"];
            this.el = "Water";
        }

        morph() {
            this.el = this.elementsArr.shift();
            this.elementsArr.push(this.el);
        };

        toString() {
            let element = this.el;
            let elemelonSort = this.melonSort;
            let elemelonElementIndex = this._elementIndex;

            return `Element: ${element}\nSort: ${elemelonSort}\nElement Index: ${elemelonElementIndex}`
        }
    }


    return {Melon, Watermelon, Firemelon, Airmelon, Earthmelon, Melolemonmelon};
}

let Melolemonmelon = fantasticFour().Melolemonmelon;
let hero = new Melolemonmelon(150, "Melo");
hero.morph();
hero.morph();
console.log(hero.toString());
