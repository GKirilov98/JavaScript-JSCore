class PublicTransportTable {
    constructor(town) {
        this.town = town;
        $("table caption").text(`${town}'s Public Transport`);
        this.addEventListeners();
    }


    addVehicle(vehicleObj) {

        let extraTr = $("<tr>").attr("class", "more-info")
            .append($("<td>").attr("colspan", "3")
                .append($("<table>")
                    .append($("<tr>").append($("<td>").text(`Route: ${vehicleObj.route}`)))
                    .append($("<tr>").append($("<td>").text(`Price: ${vehicleObj.price}`)))
                    .append($("<tr>").append($("<td>").text(`Driver: ${vehicleObj.driver}`)))
                )
            );

        $(".vehicles-info")
            .append($("<tr>")
                .append($("<td>").text(vehicleObj.type))
                .append($("<td>").text(vehicleObj.name))
                .append($("<td>")
                    .append($("<button>").text('More Info').on("click", function () {
                            if ($(this).text() === "More Info") {
                                $(this).text("Less Info");
                                extraTr.insertAfter($(this).parent().parent());
                            } else {
                                $(this).text("More Info");
                                extraTr.remove();
                            }
                        }
                    ))));


    }

    addEventListeners() {
        $(".search-btn").on("click",function () {
            let nameForm = $("input[name='name']");
            let typeForm = $("input[name='type']");
            if (nameForm.val()){
                let rows = $('.vehicles-info > tr');
                for (let i = 0; i < rows.length; i++) {
                    let firstChild = $(rows[i]).find('td').eq(1);
                    if (!firstChild.text().includes(nameForm.val())){
                        $(rows[i]).css('display', "none");
                    } else {
                        $(rows[i]).css('display', "");
                    }
                }
            }

            if (typeForm.val()){
                let rows = $('.vehicles-info > tr');
                for (let i = 0; i < rows.length; i++) {
                    let firstChild = $(rows[i]).find('td').eq(0);
                    if (!firstChild.text().includes(typeForm.val())){
                        $(rows[i]).css('display', "none");
                    } else {
                        $(rows[i]).css('display', "");
                    }
                }
            }
        })
    }
}

//module.exports = PublicTransportTable;