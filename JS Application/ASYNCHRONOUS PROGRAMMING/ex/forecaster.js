function attachEvents() {
    const baseUrl = "https://judgetests.firebaseio.com/";
    const title = $("#current");
     $("#submit").on("click", getListCode );

    function getListCode() {
        const input = $("#location").val();
        getRequest("locations.json")
            .then(function (list) {
                list =  list.filter((x) => x["name"] === input)[0]["code"];
               getConditionDays(list);
            }).catch(handleError);
    }
    
  async function getConditionDays(code) {
       await Promise.all( [getRequest(`forecast/today/${code}.json`),
           getRequest(`forecast/upcoming/${code}.json`)])
           .then(function (arr) {
               $("#forecast").css("display", "block");
               let condition = arr[0];
               let threeDays = arr[1];
               weatherNow(condition);
               future3DayWeather(threeDays);
           }).catch(handleError)
    }

    function weatherNow(condition){
        let name = condition["name"];
        let typeWeather = condition["forecast"]["condition"];
        let symbol = weatherSymbol(typeWeather);
        let high = condition["forecast"]["high"];
        let low = condition["forecast"]["low"];
        let temp = `${low}&#176;/${high}&#176;`;
           title.find($("span")).remove();
        let condSymbol = $(`<span class='condition symbol'>${symbol}</span>`);
        condSymbol.appendTo(title);
        $('<span class="condition">')
            .append($(`<span class="forecast-data">${name}</span>`))
            .append($(`<span class="forecast-data">${temp}</span>`))
            .append($(`<span class="forecast-data">${typeWeather}</span>`))
            .appendTo(title);
    }

    function  future3DayWeather(threeDays) {
        let divUpcom = $("#upcoming");
        divUpcom.find("span").remove();
        for (let i = 0; i < 3; i++) {
            createDay(i);
        }
        function createDay(index) {
            let spanUpcom =$("<span class='upcoming'>");
            let typeWeather = threeDays["forecast"][index]["condition"];
            let symbolWeather = weatherSymbol(typeWeather);
            let temperature = `${threeDays["forecast"][index]["low"]}&#176;/${threeDays["forecast"][index]["high"]}&#176;`;
            spanUpcom
                .append($(`<span class='symbol'>${symbolWeather}</span>`))
                .append($(`<span class='forecast-data'>${temperature}</span>`))
                .append($(`<span class='forecast-data'>${typeWeather}</span>`));
            divUpcom.append(spanUpcom);
        }
    }

    function getRequest(endUrl) {
        return $.ajax({
            method:"GET",
            url: baseUrl + endUrl
        })
    }

    function weatherSymbol(nameSymbol) {
        let codeSybol;
        switch (nameSymbol) {
            case  "Sunny":
                codeSybol = "&#x2600;";
                break;
            case "Partly sunny":
                codeSybol = "&#x26C5;";
                break;
            case "Overcast":
                codeSybol = "&#x2601;";
                break;
            case "Rain":
                codeSybol = "&#x2614;";
                break;
            case "Degrees":
                codeSybol = "&#176;";
                break;
        }

        return codeSybol;
    }

    function handleError() {
        alert("Error")
    }
}