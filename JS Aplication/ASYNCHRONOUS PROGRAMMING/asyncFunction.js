async function p1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve("p1 Success");
        }, 4000);
    })
}

async function p2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve("p2 Success");
        }, 2000);
    })
}

async function print() {
    // let [pr1, pr2] =   await Promise.all([p1(), p2()]);
    // console.log(pr1);
    // console.log(pr2);

    await Promise.all([p1(), p2()]).then(function (resolve) {
       console.log(resolve[0]);
       console.log(resolve[1]);
    });

}


print();