function attachEventsListeners() {
    //dayClick
    document.getElementById("daysBtn").addEventListener("click", () =>{
        let days = document.getElementById("days").value;
        document.getElementById("hours").value = days * 24;
        document.getElementById("minutes").value = days * 24 * 60;
        document.getElementById("seconds").value = days * 24 * 60 *60;
    });
    //hourClick
    document.getElementById("hoursBtn").addEventListener("click",()=>{
        let hours = document.getElementById("hours").value;
        document.getElementById("days").value = hours / 24;
        document.getElementById("minutes").value = hours * 60;
        document.getElementById("seconds").value = hours * 60 *60;
    });
    //minutesClick
    document.getElementById("minutesBtn").addEventListener("click",()=>{
        let minutes = document.getElementById("minutes").value;
        document.getElementById("days").value = minutes / 24 / 60;
        document.getElementById("hours").value = minutes / 60;
        document.getElementById("seconds").value = minutes *60;
    });
    //secondsClick
    document.getElementById("secondsBtn").addEventListener("click",()=>{
        let seconds = document.getElementById("seconds").value;
        document.getElementById("days").value = seconds / 24 / 60 /60;
        document.getElementById("hours").value = seconds / 60 / 60;
        document.getElementById("minutes").value = seconds / 60;
    });
}