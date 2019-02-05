function wordRepeat(text, word) {
    let message = text;
    let regex = new RegExp(`\\b${word}\\b`,"gi");
    let matched = message.match(regex);
    console.log(matched.length);
}

wordRepeat('How do you plan on achieving that? How? How can you even think of that?',
    'how'
);