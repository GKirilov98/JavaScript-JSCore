$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        //loadData
        let catHtml = $('[type=\"text/x-handlebars-template"]').html();
        let catTemplate = Handlebars.compile(catHtml);
        let finData = {cats: window.cats};
        let result = catTemplate(finData);
        $("#allCats").append(result);
        //showStatusCode event
        $(".btn-primary").on("click", function (e) {
            let index = $(e.target).attr("data-id");

            if (index >= 0) {
                if ($(this).text() === "Show status code") {
                    $(this).text("Hide status code");
                    let info = $(this).parent().find("div");
                    info.css('display','block');
                    $(this).parent().parent().find("img").css("height", "200");
                } else {
                    $(this).text("Show status code");
                    $(this).parent().find("div").css("display", "none");
                    $(this).parent().parent().find("img").css("height", "250");
                }
            }
        });
    }
});
