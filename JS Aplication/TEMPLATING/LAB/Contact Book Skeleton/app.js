$(() => {
    let list = $("#list .content");
    let details = $("#details .content");
    details.empty();
    list.empty();
    solve();

    async function solve() {
        let [contactHtml, data, detailHtml] = await Promise.all([
            $.get("./templates/contentTemplate.hbs"),
            $.get("./data.json"),
            $.get("./templates/detailsTemplate.hbs")
        ]);
        //LoadData
        let contactTemplate = Handlebars.compile(contactHtml);
        let finData = {contacts: data};
        let result = contactTemplate(finData);
        list.html(result);

        //viewDetails
        let detailsTemplate = Handlebars.compile(detailHtml);
            //add event listener to all
        $(".content").on("click", function (element) {
            let index = $(element.target).closest(".contact").attr("data-id");
            //
            if (index >= 0){
                let res = detailsTemplate(finData.contacts[index]);
                details.html(res);
            }

        })
    }
});