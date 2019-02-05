function realEstateAgency() {
//regOffer
    let profit = 0;
    let arr = [];
    let counter = 0;
    $("[name='regOffer']").on("click", function () {
            let rentPrice = +$('[name="apartmentRent"]').val();
            let apartmentType = $('[name="apartmentType"]').val();
            let commissionRent = +$('[name="agencyCommission"]').val();

            if (rentPrice > 0 && commissionRent >= 0 && commissionRent <= 100 && typeof apartmentType === "string" && apartmentType.length > 0) {
                let isITtrue = false;
                 apartmentType.split("").map((x) => {
                  if ( x == +x || x == ":"){
                      isITtrue = true;
                  }}
                );
                if ( isITtrue || isNaN(commissionRent) || isNaN(rentPrice)) {
                    $("#message").text("Your offer registration went wrong, try again.");
                    $('[name="apartmentRent"]').val("");
                    $('[name="apartmentType"]').val("");
                    $('[name="agencyCommission"]').val("");
                    return;
                } else {
                    let obj ={};
                    obj.type = apartmentType;
                    obj.budget = rentPrice + ((rentPrice * commissionRent)/100);
                    obj.rent = rentPrice;
                    obj.commission = commissionRent;
                    obj.counter = counter;
                    counter ++;
                    arr.push(obj);
                   // $("#message").text("Your offer was created successfully.");
                    $('[name="apartmentRent"]').val("");
                    $('[name="apartmentType"]').val("");
                    $('[name="agencyCommission"]').val("");
                }
                let myCOntainer = $("#building");
                let myDiv = $("<div>").addClass("apartment")
                    .append($("<p>").text(`Rent: ${rentPrice}`))
                    .append($("<p>").text(`Type: ${apartmentType}`))
                    .append($("<p>").text(`Commission: ${commissionRent}`));
                myDiv.appendTo(myCOntainer);
            } else {
                $("#message").text("Your offer registration went wrong, try again.");
                $('[name="apartmentRent"]').val("");
                $('[name="apartmentType"]').val("");
                $('[name="agencyCommission"]').val("");
            }
        });
    //find Offer
    $("[name='findOffer']").on("click", function () {
       let familyBudget = +$("[name='familyBudget']").val();
       let familyApartmentType = $("[name='familyApartmentType']").val();
       let familyName = $("[name='familyName']").val();

        if(familyBudget > 0 && familyApartmentType.length > 0 && familyName.length > 0){
            let searchedType = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].type == familyApartmentType){
                    searchedType.push(arr[i]);
                }
            }
            let searchBudget= [];
            for (let i = 0; i < searchedType.length; i++) {
                let budget = searchedType[i].budget;
                if ( budget <= familyBudget){
                    searchBudget.push(searchedType[i]);
                }
            }

            if (searchBudget.length > 0){
                $("#message").text("Enjoy your new home! :))");
                $("[name='familyBudget']").val("");
                $("[name='familyApartmentType']").val("");
                $("[name='familyName']").val("");
            } else {
                $("#message").text("We were unable to find you a home, so sorry :(");
                $("[name='familyBudget']").val("");
                $("[name='familyApartmentType']").val("");
                $("[name='familyName']").val("");
                return;
            }

             profit += (searchBudget[0].rent * searchBudget[0].commission / 100) +
                (familyBudget * searchBudget[0].commission / 100);

          $("#roof h1").text(`Agency profit: ${profit} lv.`);

             searchLI(familyName, searchBudget[0] );
        }
    });

    function searchLI(familyName, searchingContain){
        let div =$("#building").find("div").eq(searchingContain.counter);
        let p = $("<div>").addClass("apartment").attr("style", "border: 2px solid red")
            .append($("<p>").text(`${familyName}`))
            .append($("<p>").text(`live here now`))
            .append($("<button>").text(`MoveOut`))
        .insertAfter(div);
        div.remove();
    }
}