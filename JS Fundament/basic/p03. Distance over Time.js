function distance(arr) {
    let v1 = arr[0];
    let v2 = arr[1];
    let time = arr[2];
    let speed1 = v1 * 0.27777778;
    let speed2 = v2 * 0.27777778;
    let distance1 = speed1 * time;
    let distance2 = speed2 * time;
    let distanceBetween = Math.abs(distance1 - distance2);
    console.log(distanceBetween);
}

distance([5, -5, 40]);