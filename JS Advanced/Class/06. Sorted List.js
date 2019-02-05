class result {
    constructor() {
        this.sortList = [];
        this.size = 0;
    }

    add(num) {
        this.sortList.push(num);
        this.size++;
        this.sortList.sort((a, b) => a - b);
    }

    remove(index) {
        if(index >=0 && index< this.sortList.length) {
            this.size--;
            this.sortList.slice(index, 1);
            this.sortList.sort((a, b) => a - b);
            return this.sortList;
        }
    }

    get(index) {
        if(index >=0 && index< this.sortList.length) {
            return this.sortList[index];
        }
    }
}

var myList = new result();
console.log(myList.hasOwnProperty("size"));
myList.add(5);
console.log(myList.sortList);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
