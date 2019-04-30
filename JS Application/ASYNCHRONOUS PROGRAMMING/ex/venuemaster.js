function attachEvents() {
    const getURL = "https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/";
    $("#getVenues").on("click", postRequest);
    let base64Auth = btoa("guest:pass");
    const myContainer = $("#venue-info");

    function postRequest() {
        let dataInput = $("#venueDate").val();
        const postURL = `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${dataInput}`;
        $.ajax({
            method: "POST",
            url: postURL,
            headers: {"Authorization": "Basic " + base64Auth}
        }).then(getRequest).catch(handleError)
    }

    function getRequest(data) {
        myContainer.empty();
        for (const id of data) {
            $.ajax({
                method: "GET",
                url: getURL + id,
                headers: {"Authorization": "Basic " + base64Auth}
            }).then(displayList).catch(handleError);
        }
    }

    function displayList(data) {
        $('#venue-info')
            .append($('<div>').addClass("venue").attr('id', data._id)
                .append($('<span>').addClass("venue-name").text(data.name)
                    .append($('<input>').addClass("info").attr("type", "button").val("More info").click(showInfo)))
                .append($('<div>').addClass("venue-details").css("display", "none")
                    .append($('<table>')
                        .append($('<tr>')
                            .append($('<th>').text("Ticket Price"))
                            .append($('<th>').text("Quantity"))
                            .append($('<th>')))
                        .append($('<tr>')
                            .append($('<td>').addClass("venue-price").text(`${data.price} lv`))
                            .append($('<td>')
                                .append($('<select>').addClass("quantity")
                                    .append($('<option>').val("1").text("1"))
                                    .append($('<option>').val("2").text("2"))
                                    .append($('<option>').val("3").text("3"))
                                    .append($('<option>').val("4").text("4"))
                                    .append($('<option>').val("5").text("5"))))
                            .append($('<td>')
                                .append($('<input>').addClass("purchase").attr("type", "button").val("Purchase").click(purchase)))))
                    .append($('<span>').addClass("head").text("Venue description:"))
                    .append($('<p>').addClass("description").text(data.description))
                    .append($('<p>').addClass("description").text(`Starting time: ${data.startingHour}`))
                )
            );
    }
    
    function purchase() {
        
    }
    
    function showInfo() {
        
    }

    function handleError(error) {
        console.log(error.statusText);
    }
}
