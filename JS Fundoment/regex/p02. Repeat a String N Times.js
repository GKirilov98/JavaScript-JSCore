function repeatStrNTimes(word, times) {
    for (let i = 0; i < times; i++) {
        process.stdout.write(`${word}`);
    }
}

repeatStrNTimes('repeat', 5);