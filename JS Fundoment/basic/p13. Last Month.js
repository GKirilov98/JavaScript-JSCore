function returnDaysInLastMonth(array){
    let day = parseInt(array[0]);
    let month = parseInt(array[1]);
    let year = parseInt(array[2]);
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}