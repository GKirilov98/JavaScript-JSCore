// function addDestination () {
//     let myContainer = $("#destinationsList");
//     let city = "";
//      $(".inputData").each(function () {
//        city += $(this).val() + "|";
//     });
//     city = city.split("|").filter((x) => x !== "");
//     if(city.length < 2){
//         return;
//     }
//     city = city.join(", ");
//
//     let season = $("#seasons").val();
//     $(`#summaryBox #${season}`).val(+$(`#summaryBox #${season}`).val() + 1);
//      season = season.split("");
//      season[0] = season[0].toUpperCase();
//     season = season.join("");
//     let tr = $("<tr>")
//         .append($("<td>").text(city))
//         .append($("<td>").text(season));
//     tr.appendTo(myContainer);
//
//     $(".inputData").each(function () {
//         $(this).val("");
//     })
// }