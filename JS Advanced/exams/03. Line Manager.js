class LineManager {
    get stops() {
        return this._stops;
    }

    set stops(value) {
        if (!Array.isArray(value)) {
            throw new Error("Invalid input");
        }

        for (let i = 0; i < value.length; i++) {
            if (value[i].name === "" || value[i].timeToNext < 0
                || typeof value[i].name !== "string"
            || typeof value[i].timeToNext !== "number") {
                throw new Error("Invalid name or  timeToNext");
            }
        }

        this._stops = value;
    }

    get atDepot() {
        return this.currStop === this.stops.length - 1;
    }

    get nextStopName() {
        if (this.currStop === this.stops.length - 1) {
            return "At depot.";
        }

        return this.stops[this.currStop + 1].name;
    }

    get currentDelay() {
        return this.delay;
    }

    constructor(stops) {
        this.stops = stops;
        this.currStop = 0;
        this.delay = 0;
        this.duration = 0;
    }

    arriveAtStop(minutes) {
        if (minutes < 0 || this.atDepot) {
            throw new Error("Negative minutes or the bus is at depot")
        }

        this.duration += +minutes;
        this.delay += minutes - this.stops[this.currStop].timeToNext;
        this.currStop++;
        return !this.atDepot;
    }

    toString(){
        if (this.atDepot){
            return `Line summary\n- Course completed\n- Stops covered: ${this.currStop}\n- Time on course: ${this.duration} minutes\n- Delay: ${this.currentDelay} minutes`;
        } else {
            return `Line summary\n- Next stop: ${this.nextStopName}\n- Stops covered: ${this.currStop}\n- Time on course: ${this.duration} minutes\n- Delay: ${this.currentDelay} minutes`;
        }
    }
}

const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 3},
]);

while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());




// Should throw an Error (minutes cannot be negative)
//man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
//man.arriveAtStop(4);

// const wrong = new LineManager([
//     { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
// ]);



