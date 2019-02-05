function addOrRemove(commands) {
    let arr = [];
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].toLowerCase();
        switch (command) {
            case 'add':
                arr.push(i+1);
                break;
            case 'remove':
                arr.pop();
                break
        }
    }

    if (arr.length ===0){
        console.log("Empty");
    } else {
        console.log(arr.join("\n"));
    }
}

addOrRemove(['remove',
    'remove',
    'remove']
)