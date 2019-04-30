const baseUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students";
const base64 = btoa("guest:guest");
const authorHead = {
    "authorization": "Basic " + base64,
    "Content-type": "application/json"
};

request("GET").then(fillTheTable).catch(handleError);

function fillTheTable(data) {
  data =  Object.values(data).sort((a, b) => {
       return a["ID"] - b["ID"];
    });
    //data = Object.values(data).some((a, b))
    for (const student of data) {
        let table = $("#results");
        let tr = $("<tr>")
            .append($(`<th>${student.ID}</th>`))
            .append($(`<th>${student.FirstName}</th>`))
            .append($(`<th>${student.LastName}</th>`))
            .append($(`<th>${student.FacultyNumber}</th>`))
            .append($(`<th>${student.Grade}</th>`));
        table.append(tr);
    }
}





function request(method, endurl = "", data = {}) {
    return $.ajax({
        method: method,
        url: baseUrl + endurl,
        headers: authorHead,
        data: JSON.stringify(data)
    })
}

function handleError(error) {
    console.warn(error.statusText);
}