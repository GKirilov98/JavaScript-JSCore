function cristalChange(arr) {
    for (let i = 1; i < arr.length; i++) {
        let cristal = +arr[i];
        let cut = 0;
        let lab = 0;
        let grind = 0;
        let etch = 0;
        let xRay = 0;
        console.log(`Processing chunk ${cristal} microns`);
        while (true) {
            if (cristal / 4 >= arr[0] -1) {
                cristal /= 4;
                cut++;
            } else {
                break;
            }
        }

        cristal = parseInt(cristal);
        while (true) {
            if (cristal * 0.8 >= arr[0] -1) {
                cristal *= 0.8;
                lab++;

            } else {
                break;
            }

        }

        cristal = parseInt(cristal);
        while (true) {
            if (cristal - 20 >= arr[0] - 1) {
                cristal -= 20;
                grind++;
            } else {
                break
            }
        }

        cristal = parseInt(cristal);
        while (true) {
            if (cristal - 2 >= arr[0] - 1) {
                cristal -= 2;
                etch++;
            } else {
                break;
            }
        }

        cristal = parseInt(cristal);
        if (cristal + 1 === arr[0]) {
            cristal++;
            xRay++;
        }

        if (cut !== 0) {
            console.log(`Cut x${cut}`);
            console.log("Transporting and washing");
            cut = 0;
        }

        if (lab !== 0) {
            console.log(`Lap x${lab}`);
            console.log("Transporting and washing");
            lab = 0;
        }

        if (grind !== 0) {
            console.log(`Grind x${grind}`);
            console.log("Transporting and washing");
            grind = 0;
        }

        if (etch !== 0) {
            console.log(`Etch x${etch}`);
            console.log("Transporting and washing");
            etch = 0;
        }

        if (xRay !== 0) {
            console.log(`X-ray x${xRay}`);
            xRay = 0;
        }

        console.log(`Finished crystal ${cristal} microns`);
    }
}

