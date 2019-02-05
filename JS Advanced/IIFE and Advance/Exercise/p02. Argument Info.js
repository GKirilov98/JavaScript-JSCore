function info() {
    let obj = {};
    for (let i = 0; i < arguments.length; i++) {
        let item = arguments[i];
        let name = typeof item;
        console.log(name + ": " + item);
        if (obj[name] == null) {
            obj[`${name}`] = 1;
        } else {
            obj[`${name}`]++;
        }
    }

    Object.keys(obj).sort((a, b) => obj[b] - obj[a]).map((x) => console.log(x + " = " + obj[x]))
}

info({name: 'bob'},  'cat', 3.333, 9.999, 15, 'kitten', 'tomcat');