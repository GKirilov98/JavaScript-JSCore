for (var i = 1; i <= 3; i++) {
    hahah(i)
}

function hahah(index) {
    setTimeout(function () {
        console.log(index);
    }, index * 1000);
}
