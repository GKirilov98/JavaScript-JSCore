$(() => {

    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $("#loadingBox").fadeOut()
    });

    const app = Sammy('#container', function () {
        this.use("Handlebars", "hbs");



        //HOME page
        function displayHome(ctx) {
            // ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/home/home.hbs')
            });
        }

        this.get("index.html", displayHome);
        this.get("#/home", displayHome);

        //registerPage
        this.get("#/register", function (ctx) {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs')
            });
        });
        this.post("#/register", function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPass;
            if (username.length < 3 || !!username.match(/[^A-Za-z]/)) {
                auth.showError("Invalid username! It should be at least 3 characters and contain only english alphabet letters.");
            } else if (!!password.match(/[^A-Za-z0-9]+/) || password.length < 6) {
                auth.showError("Invalid password! It should be at least 6 characters and should contain only english alphabet letters and digits")
            } else if (password !== repeatPassword) {
                auth.showError("Passwords don't match!")
            } else {
                auth.register(username, password).then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo("SUCCESS REGISTERED!");
                    ctx.redirect("#/allList");
                }).catch(auth.handleError)
            }
        });

        //Login Page
        this.get("#/login", function (ctx) {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial("./templates/login/loginPage.hbs")
            })
        });
        this.post("#/login", function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            auth.login(username, password)
                .then(function (userInfo) {

                    auth.saveSession(userInfo);
                    auth.showInfo("LOGGED IN!");
                    ctx.redirect("#/allList");
                }).catch(auth.handleError);
        });

        //Logout
        this.get("#/logout", function (ctx) {
            auth.logout().then(function () {
                sessionStorage.clear();
                auth.showInfo("LOGGED OUT!");
                ctx.redirect("#/home");
            })
        });
        //All List
        this.get("#/allList", function (ctx) {
            carsService.loadCars().then(function (cars) {
                ctx.isAuthor = false;
                let userId = sessionStorage.getItem("userId");
                for (const car of cars) {
                    if (car._acl.creator === userId) {
                        car.isAuthor = true;
                    }
                }
                ctx.username = sessionStorage.getItem('username');
                ctx.cars = cars;
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    car: "./templates/allList/car.hbs",
                    buttons: "./templates/allList/buttons.hbs"
                }).then(function () {
                    this.partial("./templates/allList/allListPage.hbs")
                })//.catch(auth.handleError);
            });

        });

        //Create Car
        this.get("#/create", function (ctx) {
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial("./templates/create/createPage.hbs")
            })
        });
        this.post("#/create", function (ctx) {
            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let fuel = ctx.params.fuelType;
            let year = ctx.params.year;
            let price = ctx.params.price;
            let imageUrl = ctx.params.imageUrl;
            let model = ctx.params.model;
            let seller = sessionStorage.getItem('username');

            carsService.createCar(title, description, brand, fuel, year, price, imageUrl, model, seller)
                .then(function (carInfo) {
                    carsService.joinTeam(carInfo._id).then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo("listing created.");
                        ctx.redirect("#/allList");
                    })
                })
        });

        // View details
        this.get("#/details/:id", function (ctx) {
            let teamId = ctx.params.id.substr(1);
            carsService.loadCarDetails(teamId).then(function (carInfo) {
                ctx.title = carInfo.title;
                ctx.description = carInfo.description;
                ctx.brand = carInfo.brand;
                ctx.fuel = carInfo.fuel;
                ctx.year = carInfo.year;
                ctx.price = carInfo.price;
                ctx.imageUrl = carInfo.imageUrl;
                ctx.model = carInfo.model;
                ctx.seller = sessionStorage.getItem('username');
                ctx.isAuthor = sessionStorage.getItem("userId") === carInfo._acl.creator;
                ctx.username = sessionStorage.getItem('username');
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial("./templates/details/detailsPage.hbs");
                })

            })
        });

        //Edit
        this.get("#/edit/:id", function (ctx) {
            let teamId = ctx.params.id.substr(1);
            carsService.loadCarDetails(teamId).then(function (carInfo) {
                ctx.title = carInfo.title;
                ctx.description = carInfo.description;
                ctx.brand = carInfo.brand;
                ctx.fuel = carInfo.fuel;
                ctx.year = carInfo.year;
                ctx.price = carInfo.price;
                ctx.imageUrl = carInfo.imageUrl;
                ctx.model = carInfo.model;
                ctx.seller = sessionStorage.getItem('username');
                ctx.isAuthor = sessionStorage.getItem("userId") === carInfo._acl.creator;
                ctx.username = sessionStorage.getItem('username');
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial("./templates/edit/editPage.hbs");
                })
            })
        });
        this.post("#/edit/:id", function (ctx) {
            let teamId = ctx.params.id.substr(1);
            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let fuel = ctx.params.fuelType;
            let year = ctx.params.year;
            let price = ctx.params.price;
            let imageUrl = ctx.params.imageUrl;
            let model = ctx.params.model;
            let seller = sessionStorage.getItem('username');
            carsService.edit(teamId, title, description, brand, fuel, year, price, imageUrl, model, seller)
                .then(function () {
                    auth.showInfo("Car list updated!");
                    ctx.redirect("#/allList");
                })
        });

        //Delete car
        this.get("#/delete/:id", function (ctx) {
            let teamId = ctx.params.id.substr(1);
            carsService.deleteCar(teamId).then(function () {
                ctx.redirect("#/allList")
            })
        });

        //Car list of users
        this.get("#/myList", function (ctx) {
            carsService.loadCars().then(function (cars) {
               let myCars = [];
                let userId = sessionStorage.getItem("userId");
                for (const car of cars) {
                    if (car._acl.creator === userId) {
                        myCars.push(car)
                    }
                }
                ctx.cars = myCars;
                ctx.username = sessionStorage.getItem('username');
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial("./templates/myList/myListPage.hbs")
                })
            })
        })

    });

    app.run();
});