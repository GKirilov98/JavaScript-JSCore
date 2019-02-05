function username(arr) {
    let user = new Set();
    for (let i = 0; i < arr.length; i++) {
        user.add(arr[i]);
    }

    Array.from(user).sort((a, b) => a.length - b.length || a.localeCompare(b)).map((x) => console.log(x))
}

username(['Ashton',
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);