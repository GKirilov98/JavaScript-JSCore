$(() => {

    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $("#loadingBox").fadeOut()
    });

    const app = Sammy("#container", function () {
        this.use("Handlebars", "hbs");
        //index
        function displayHome(ctx) {
            ctx.username = sessionStorage.getItem("username");
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                login: "./templates/login/login.hbs",
                register: "./templates/register/register.hbs",
            }).then(function () {
                //this.username = ctx.username;
                this.partial("./templates/welcome/welcome.hbs")
            })

        }
        this.get("index.html", displayHome);
        //HOME
        this.get("#/home", displayProducts);
        //Login
        this.post("#/login", function (ctx) {
            let username = ctx.params.usernameLogin;
            let password = ctx.params.passwordLogin;
            auth.login(username, password)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo("Login successful.");
                    ctx.redirect("#/home");
                }).catch(auth.handleError);
        });
        //Register
        this.post("#/register", function (ctx) {
            let username = ctx.params.usernameRegister;
            let password = ctx.params.passwordRegister;
            let repeatPassword = ctx.params.passwordRegisterCheck;

            auth.register(username, password)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo("User registration successful.");
                    ctx.redirect("#/home");
                }).catch(auth.handleError)
        });
        //Logout
        this.get("#/logout", function (ctx) {
            auth.logout().then(function () {
                sessionStorage.clear();
                auth.showInfo("LOGGED OUT!");
                ctx.redirect("#/index.html");
            })
        });

        //Create One RECEPTE =====> Create Products
        this.post("#/create", function (ctx) {
            let type = ctx.params.type;
            let qty = Number(ctx.params.qty);
            let price = Number(ctx.params.price).toFixed(2);
            let currTotalPrice = Number((+qty * +price)).toFixed(2);

            productsService.createProduct(type, qty, price, currTotalPrice)
                .then(function (productInfo) {
                    productsService.joinTeam(productInfo._id)
                        .then(function (userInfo) {
                            auth.saveSession(userInfo);
                            auth.showInfo("Entry added");
                            ctx.redirect("#/home");
                        })
                })
        });
        //Read products ----> HOME
        function displayProducts(ctx) {
            ctx.username = sessionStorage.getItem("username");

            productsService.loadProducts().then(function (products) {
                let totalPriceOfProducts = 0 ;
                for (let pr of products) {
                    totalPriceOfProducts += +pr.currTotalPrice;
                }
                ctx.total = totalPriceOfProducts.toFixed(2);
                ctx.products = products;
            }).then(function () {
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    product: "./templates/home/readForm.hbs",
                    create: "./templates/home/createForm.hbs",
                }).then(function () {
                    //this.username = ctx.username;
                    this.partial("./templates/home/home.hbs")
                });
            }).catch(auth.handleError)


        }
        //Delete
        this.get("#/delete/:id", function (ctx) {
            let productId = ctx.params.id.substr(1);
            productsService.deleteCar(productId).then(function () {
                ctx.redirect("#/home")
            })
        });

        //*********************************************************//
        //*********************************************************//
        //*********************************************************//

        //Check out recepte
        this.get("#/checkOut", function (ctx) {
            productsService.loadProducts().then(function (products){
                ctx.products =
            })
        })




    });

    app.run();
});