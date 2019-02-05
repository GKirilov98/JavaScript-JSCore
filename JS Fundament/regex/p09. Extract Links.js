function extarctLinks(arr) {
    let links = [];
    for (let i = 0; i < arr.length; i++) {
        let text = arr[i];
        let regex =  /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
        let matched = text.match(regex);
        links.push(matched);
    }
    console.log(links.filter( e => e!== null).join("\n"));
}

extarctLinks(['Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc']
);