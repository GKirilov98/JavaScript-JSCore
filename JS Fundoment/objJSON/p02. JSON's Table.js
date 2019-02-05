function tableJSON(stringJSON) {
    let tableHTML = "<table>\n";
    for (let i = 0; i < stringJSON.length; i++) {
        let tokens = JSON.parse(stringJSON[i]);
        tableHTML+=
            "    <tr>\n" +
            `       <td>${tokens['name']}</td>\n` +
            `       <td>${tokens['position']}</td>\n` +
            `       <td>${tokens['salary']}</td>\n` +
            "   <tr>\n";
    }
    tableHTML += "</table>";
    console.log(tableHTML);
}

tableJSON(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);