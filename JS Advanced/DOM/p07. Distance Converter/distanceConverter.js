function attachEventsListeners() {
    document.getElementById("convert").addEventListener("click",() =>{
        let inputUnits = document.getElementById("inputUnits").value;
        let inputDistance = document.getElementById("inputDistance").value;
        let inputMeter = convertToMeter("$" + inputUnits, inputDistance);

        let outputUnits = document.getElementById("outputUnits").value;
        let outputMeter = convertToUnits(inputMeter, "$" + outputUnits);
        document.getElementById("outputDistance").value = outputMeter;
    })
    function convertToMeter(meter, distance) {
        switch (meter) {
            case "$km":
                meter = 1000;
                break;
            case "$m":
                meter = 1;
                break;
            case "$cm":
                meter = 0.01;
                break;
            case "$mm":
                meter = 0.001;
                break;
            case "$mi":
                meter = 1609.34;
                break;
            case "$yrd":
                meter = 0.9144;
                break;
            case "$ft":
                meter = 0.3048;
                break;
            case "$in":
                meter = 0.0254;
                break;
        }
        return meter * distance;
    }
    function convertToUnits(distanceInMeters, unit) {
        switch (unit) {
            case "$km":
                distanceInMeters /= 1000;
                break;
            case "$m":
                distanceInMeters /= 1;
                break;
            case "$cm":
                distanceInMeters /= 0.01;
                break;
            case "$mm":
                distanceInMeters /= 0.001;
                break;
            case "$mi":
                distanceInMeters /= 1609.34;
                break;
            case "$yrd":
                distanceInMeters /= 0.9144;
                break;
            case "$ft":
                distanceInMeters /= 0.3048;
                break;
            case "$in":
                distanceInMeters /= 0.0254;
                break;
        }
        return distanceInMeters;
    }
}

