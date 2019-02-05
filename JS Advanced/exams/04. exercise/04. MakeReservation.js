function makeReservation(idContainer) {
    let myContainer = $('#infoPreview');
    let fullName = $('#fullName');
    let email = $("#email");
    let phoneNum = $("#phoneNumber");
    let address = $("#address");
    let postalCode = $("#postalCode");

    $("#submit").on("click", function () {
        // if (fullName.val() !== "" && fullName.val() !== " " &&
        //  email.val() !== "" && email.val() !== " ") {
        $("<li>").text("Name: ").append(fullName.val()).appendTo(myContainer);
        $("<li>").text("E-mail: ").append(email.val()).appendTo(myContainer);
        $("<li>").text("Phone: ").append(phoneNum.val()).appendTo(myContainer);
        $("<li>").text("Address: ").append(address.val()).appendTo(myContainer);
        $("<li>").text("Postal code: ").append(postalCode.val()).appendTo(myContainer);

        fullName.val("");
        email.val("");
        phoneNum.val("");
        address.val("");
        postalCode.val("");
        $("#edit").prop("disabled", false);
        $("#continue").prop("disabled", false);
        $("#submit").css("pointer-events", "none");
        //  }
    });

    $("#edit").on("click", function () {
        let arr = [];
        for (let li of $("#infoPreview li")) {
            li = li.textContent.split(": ");
            arr.push(li[1]);
        }

        fullName.val(arr[0]);
        email.val(arr[1]);
        phoneNum.val(arr[2]);
        address.val(arr[3]);
        postalCode.val(arr[4]);
        $("#infoPreview li").remove();
        $("#edit").prop("disabled", true);
        $("#continue").prop("disabled", true);
        $("#submit").css("pointer-events", "");
    });

    $("#continue").on("click", function () {
        $("#edit").prop("disabled", true);
        $("#continue").prop("disabled", true);
        $("#submit").prop("disabled", true);

        let container = $(`${idContainer}`)
        container.append($("<h2>").text("Payment details"));
       let select = $("<select>").attr("id", "paymentOptions").addClass("custom-select")
           .append($("<option>").text("Choose"));
        select.appendTo(container);
    });
}