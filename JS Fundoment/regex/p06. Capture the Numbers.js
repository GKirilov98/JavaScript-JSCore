function captNum(arr) {
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        let text = arr[i];
        let regex = /[0-9]+/gm;
        let matched = text.match(regex);
        if (matched !== null) {
            nums.push(matched);
        }
    }
    console.log(nums.join(" ").split(",").join(" "));
}

captNum(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']
);