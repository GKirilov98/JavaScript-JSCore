function attachEvents() {
    $("#btnLoad").on("click", getAbonate);
    $("#btnCreate").on("click", postAbonate);

    const url = "https://phonebook-nakov.firebaseio.com/phonebook";

    function getAbonate() {
        $("#phonebook").empty();
        $.ajax({
            type: "GET",
            url: url + ".json"
        }).then(function (abonates) {
            for (const id in abonates) {
                let name = abonates[id]['person'];
                let phone = abonates[id]['phone'];
                $("#phonebook")
                    .append($("<li>").text(`${name}: ${phone}`)
                        .append($("<button>[Delete]</button>").on("click", function () {
                            //DELETE
                            $.ajax({
                                method: "DELETE",
                                url: url + "/" + id + ".json"
                            }).then(() => {
                                  $(this).parent().remove()}
                            )
                        })));
            }
        })
    }

    function postAbonate() {
        let person = $("#person").val();
        let phone = $("#phone").val();
        $.ajax({
            method: "POST",
            url: url + ".json",
            data: JSON.stringify({person, phone})
        }).then(function () {
            getAbonate();
        });

        $("#person").val("");
        $("#phone").val("");
    }
}