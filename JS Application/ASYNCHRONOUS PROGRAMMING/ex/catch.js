function attachEvents() {
    const baseURL = "https://baas.kinvey.com/appdata/kid_S10mENFAm/biggestCatches";
    const base64 = btoa("Pesho:p");
    const authHeader = {
        "Authorization": "Basic " + base64,
        "Content-type": "application/json" //<---Very Import for POST method kinvey
    };
    let catchers = $("#catches");
    $(".load").on("click", getRequest);


    function request(method, endURL = "", data) {
        return $.ajax({
            method: method,
            url: baseURL + endURL,
            headers: authHeader,
            data: JSON.stringify(data)
        })
    }

    //CREAT
    $(".add").on("click", postRequest);
    function postRequest() {
        let crateCatch = {
            angler: $("#addForm").find(".angler").val(),
            weight: +$("#addForm ").find(".weight").val(),
            species: $("#addForm ").find(" .species").val(),
            location: $("#addForm ").find(".location").val(),
            bait: $("#addForm ").find(".bait").val(),
            captureTime: +$("#addForm").find(".captureTime").val()
        };
        request("POST","", crateCatch ).then(getRequest).catch(handleError);
    }

    //Get Request and fill the HTML (LOAD)
    // READ
    function getRequest() {
        request("GET")
            .then(loadData)
            .catch(handleError)
    }

    function loadData(data) {
        catchers.empty();
        for (const el of data) {
            let div = $(
                `<div class="catch" data-id="${el._id}">` +
                `<label>Angler</label>` +
                `<input type="text" class="angler" value="${el.angler}"/>` +
                `<label>Weight</label>` +
                `<input type="number" class="weight" value="${el.weight}"/>` +
                `<label>Species</label>` +
                `<input type="text" class="species" value="${el.species}"/>` +
                `<label>Location</label>` +
                `<input type="text" class="location" value="${el.location}"/>` +
                `<label>Bait</label>` +
                `<input type="text" class="bait" value="${el.bait}"/>` +
                `<label>Capture Time</label>` +
                `<input type="number" class="captureTime" value="${el.captureTime}"/></div>`)
                .append( $(`<button class="update">Update</button>`).on("click", updateInfo) )
                .append( $(`<button class="delete">Delete</button>`).on("click", deleteInfo));
            catchers.append(div);
        }
    }

    //UPDATE
    function updateInfo() {
        let catchEl = $(this).parent();
        let crateCatch = {
            angler: catchEl.find(".angler").val(),
            weight: +catchEl.find(".weight").val(),
            species: catchEl.find(" .species").val(),
            location: catchEl.find(".location").val(),
            bait: catchEl.find(".bait").val(),
            captureTime: +catchEl.find(".captureTime").val()
        };
        let id = $(this).parent().attr("data-id");
        request("PUT", "/" + id, crateCatch ).then(getRequest).catch(handleError)
    }

    //DELETE
    function deleteInfo() {
        let id = $(this).parent().attr("data-id");
        request("DELETE", "/" + id).then(getRequest).catch(handleError)
    }


    function handleError(err) {
        console.log(err.statusText);
    }
}