function solve(arr, criteria) {
    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }

    let tickets = [];
    for (let line of  arr) {
        let tokens = line.split("|");
        let destination = tokens[0];
        let price = tokens[1];
        let status = tokens[2];
        let input = new Tickets(destination, price, status);
        tickets.push(input);
    }

    return tickets.sort((a, b) => a[criteria] > b[criteria]);
}


let result = solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);

console.log(result);
