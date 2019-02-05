$(() => {

    const app = Sammy("#main", function () {
        this.use("Handlebars", "hbs");



            this.get("/index.html", function () {
                this.loadPartials({
                    footer: "./templates/common/footer.hbs"
                }).then(function () {
                this.partial("./templates/catalog/catalog.hbs")
            })
        })

    });

    app.run();
});