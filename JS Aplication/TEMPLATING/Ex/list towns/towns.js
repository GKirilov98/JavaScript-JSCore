function attachEvents() {
    $("#btnLoadTowns").click(addIntoTheList);

    function addIntoTheList() {
        const myContainer = $("#root");
        let townsHTML = $("#towns-template").html();
        let townsTemplate = Handlebars.compile(townsHTML);
        let info = $("#towns").val();
        if (info.length > 1 &&  Number(info) != info){
            info = info.split(", ").map(e => {return{name: e}});
            let finalInfo = {cities:info};
            let result = townsTemplate(finalInfo);
            myContainer.append(result);
            $("#towns").val("");
        } else {
            alert("Invalid input: It must be a string and length grater then one")
        }
    }
}