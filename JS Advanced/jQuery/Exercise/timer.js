function timer() {
    let hours = $("#hours");
    let minutes = $("#minutes");
    let seconds = $("#seconds");
    let startTimer = $("#start-timer");
    let stopTimer = $("#stop-timer");
    let workingTimer = null;
    let counter = 0;

    startTimer.on("click",funStart);
    stopTimer.on("click", stopTime);

    function funStart() {
        if (workingTimer === null){
          workingTimer = setInterval(increment, 1000)
        }

        function increment() {
            counter++;
            hours.text(("0" + Math.floor(counter / 60 /60)).slice(-2));
            minutes.text(("0" + Math.floor(counter / 60)%60).slice(-2));
            seconds.text(("0" + counter % 60).slice(-2));
        }
    }

    function stopTime() {
        clearInterval(workingTimer);
        workingTimer = null;
    }
}