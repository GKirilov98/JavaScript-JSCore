$(() => {

    const app = Sammy("#main", function () {
        this.use('Handlebars', 'hbs');

        this.get('#/login', function () {
            this.partial('./templates/login.hbs');
        });
        this.post('#/login', function (context) {
            kinveyController.loginUser(
                context.params.username,
                context.params.password);
            profile(ctx);
            this.redirect("#/profile");
        });

        this.get('#/register', function () {
            this.partial('./templates/register.hbs');
        });
        this.post('#/register', function (context) {
            kinveyController.registerUser(
                context.params.username,
                context.params.password,
                context.params.firstName,
                context.params.lastName,
                context.params.phone,
                context.params.email
            );
            profile(ctx);
            this.redirect("#/profile");
            //this.partial('./templates/register.hbs');
        });

        this.get('#/contacts', async function () {
            //LoadData
            let [contactHtml, data, detailHtml] = await Promise.all([
                $.get("./templates/contacts.hbs"),
                $.get("./data.json"),
                $.get("./templates/partials/details.hbs")
            ]);

            let contactTemplate = Handlebars.compile(contactHtml);
            let finData = {contacts: data};
            let result = contactTemplate(finData);
            $("#main").html(result);

            //Compile Detail
            let detailTemplate = Handlebars.compile(detailHtml);

            //AddEvent
            $(".content").on("click", function (element) {
                let index = $(element.target).closest(".contact").attr("data-id");
                if (index >= 0) {
                    finData.detail = [];
                    let curAbonateInfo = finData.contacts[index];
                    finData.detail.push(curAbonateInfo);
                    let fillInfo = detailTemplate(finData);
                    //put Info in the HTML
                    $("#details .content").html(fillInfo);
                }
            });

        });

        this.get('#/profile', function () {
            this.firstName = sessionStorage.getItem("firstName");
            this.lastName = sessionStorage.getItem("lastName");
            this.phone = sessionStorage.getItem("phone");
            this.email = sessionStorage.getItem("email");
            this.partial('./templates/profile.hbs');
        });

        this.put('#/profile', function (context) {
            kinveyController.editUser(
                context.params.firstName,
                context.params.lastName,
                context.params.phone,
                context.params.email
            );
        });
    });

    app.run();
});