function rotateArr(arr) {
    let spin = +arr.pop();
    for (let i = 0; i < spin % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(" "));
}

rotateArr(['1',
    '2',
    '3',
    '4',
    '2']
)