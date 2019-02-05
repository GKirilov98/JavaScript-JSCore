function roadRadar(arr) {
    let speed = +arr[0];
    let road = arr[1];
    let limit = null;
    switch (road.toLowerCase()) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
        default:
            return;
    }

    let result = speed - limit;
    if (result <= 0) {
    } else if (result <= 20) {
        console.log("speeding");
    } else if (result <= 40) {
        console.log("excessive speeding");
    } else if (result > 40) {
        console.log("reckless driving");
    }
}

