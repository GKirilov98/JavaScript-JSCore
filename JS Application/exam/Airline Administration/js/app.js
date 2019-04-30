$(() => {
    //Loading...
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $("#loadingBox").fadeOut()
    });
    const app = Sammy('#container', function () {
        this.use("Handlebars", "hbs");

        //welcome page
        function displayWelcome(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            // ctx.loadPartials({
            //     header: './templates/common/header.hbs',
            //     footer: './templates/common/footer.hbs',
            // }).then(function () {
            this.partial('./templates/common/header.hbs')
            // });
        }

        this.get("index.html", displayWelcome);
        this.get("#/index", displayWelcome);

        //HOME
        this.get("#/home", displayCatalog);
        function displayCatalog(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            // ctx.email = sessionStorage.getItem('email');
            teamsService.loadTeams().then(function (flights) {
                // ctx.isAuthor = false;
                // let userId = sessionStorage.getItem("userId");
                // for (const flight of flights) {
                //     if (flight._acl.creator === userId) {
                //         flight.isAuthor = true;
                //     }
                // }
                ctx.flights = flights;
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial("./templates/catalog/catalog.hbs");
                })
            });
        }

        //Register
        this.get("#/register", function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial("./templates/register/register.hbs")
            })
        });
        this.post("#/register", function (context) {
            let username = context.params.username;
            let password = context.params.pass;
            let repeatPassword = context.params.checkPass;
            if (username.length < 5) {
                auth.showError("Invalid username! It must be least 5 characters long!")
                // } else if (!!username.match(/[^A-Za-z]/)) {
                //     auth.showError("Invalid username! It should contain only english alphabet letters.")
            } else if (password.length < 1) {
                auth.showError("Invalid password! It must be least 1 characters long!")
                // } else if (!!password.match(/[^A-Za-z0-9]+/)) {
                //     auth.showError("Invalid username! It should contain only english alphabet letters and digits.")
            } else if (password !== repeatPassword) {
                auth.showError("Password do not match");
            } else {
                auth.register(username, password)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo("User registration successful.");
                        context.redirect("#/home");
                    }).catch(auth.handleError);
            }
        });

        //Logout
        this.get("#/logout", function (ctx) {
            auth.logout().then(function () {
                sessionStorage.clear();
                auth.showInfo("LOGGED OUT!");
                ctx.redirect("#/index");
            })
        });

        //Login
        this.get("#/login", function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial("./templates/login/login.hbs")
            })
        });
        this.post("#/login", function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.pass;
            if (username.length < 5) {
                auth.showError("Invalid username! It must be least 5 characters long!")
                // } else if (!!username.match(/[^A-Za-z]/)) {
                //     auth.showError("Invalid username! It should contain only english alphabet letters.")
            } else if (password.length < 1) {
                auth.showError("Invalid password! It must be least 1 characters long!")
                // } else if (!!password.match(/[^A-Za-z0-9]+/)) {
                //     auth.showError("Invalid username! It should contain only english alphabet letters and digits.")
            } else {
                auth.login(username, password)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo("Login successful.");
                        ctx.redirect("#/home");
                    }).catch(auth.handleError)
            }
        });

        //Create
        this.get("#/create", function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/create/create.hbs')
            })
        });
        this.post("#/create", function (ctx) {
            let destination = ctx.params.destination;
            let origin = ctx.params.origin;
            let departureDate = ctx.params.departureDate;
            let departureTime = ctx.params.departureTime;
            let seats = ctx.params.seats;
            let cost = ctx.params.cost;
            let img = ctx.params.img;
            let isPublic = ctx.params.public;
            let creator = sessionStorage.getItem('username');

            if (destination === "") {
                auth.showError("Destination should not be non-empty!")
            } else if (origin === "") {
                auth.showError("Origin should not be non-empty!")
            } else if (seats < 1) {
                auth.showError("Seats should be positive number!")
            } else if (cost < 0) {
                auth.showError("Cost should be positive number!")
            } else {
                isPublic = isPublic === "on";

                teamsService.createTeam(destination, origin, departureDate,
                    creator, departureTime, seats, cost, img, isPublic).then(function (teamInfo) {
                    teamsService.joinTeam(teamInfo._id).then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo(`Created flight.`);
                        ctx.redirect("#/home");
                    }).catch(auth.handleError);
                }).catch(auth.handleError);
            }
        });

        //Edit
        this.get("#/edit/:id", function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            let teamId = ctx.params.id.substr(1);

            teamsService.loadTeamDetails(teamId)
                .then(function (teamInfo) {
                    ctx.teamId = teamId;
                    ctx.destination = teamInfo.destination;
                    ctx.origin = teamInfo.origin;
                    ctx.departureDate = teamInfo.departureDate;
                    ctx.departureTime = teamInfo.departureTime;
                    ctx.seats = teamInfo.seats;
                    ctx.cost = teamInfo.cost;
                    ctx.img = teamInfo.img;
                    ctx.isPublic = ctx.params.public;
                    ctx.creator = teamInfo.creator;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/edit/edit.hbs')
                    })
                }).catch(auth.handleError);
        });
        this.post("#/edit/:id", function (ctx) {
            let teamId = ctx.params.id.substr(1);
            let destination = ctx.params.destination;
            let origin = ctx.params.origin;
            let departureDate = ctx.params.departureDate;
            let departureTime = ctx.params.departureTime;
            let seats = ctx.params.seats;
            let cost = ctx.params.cost;
            let img = ctx.params.img;
            let isPublic = ctx.params.public;
            let creator = sessionStorage.getItem('username');

            if (destination === "") {
                auth.showError("Destination should not be non-empty!")
            } else if (origin === "") {
                auth.showError("Origin should not be non-empty!")
            } else if (seats < 1) {
                auth.showError("Seats should be positive number!")
            } else if (cost < 0) {
                auth.showError("Cost should be positive number!")
            } else {
                isPublic = isPublic === "on";
                teamsService.edit(teamId,destination, origin, departureDate,
                    creator, departureTime, seats, cost, img, isPublic)
                    .then(function () {
                        auth.showInfo(`Successfully edited flight.`);
                        ctx.redirect(`#/details/:${teamId}`);
                    }).catch(auth.handleError);
            }
        });

        //Details
        this.get("#/details/:id", function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            let teamId = ctx.params.id.substr(1);
            teamsService.loadTeamDetails(teamId)
                .then(function (teamInfo) {
                    ctx.teamId = teamId;
                    ctx.destination = teamInfo.destination;
                    ctx.origin = teamInfo.origin;
                    ctx.departureDate = teamInfo.departureDate;
                    ctx.departureTime = teamInfo.departureTime;
                    ctx.seats = teamInfo.seats;
                    ctx.cost = teamInfo.cost;
                    ctx.img = teamInfo.img;
                    ctx.isPublic = ctx.params.public;
                    ctx.creator = teamInfo.creator;
                    ctx.isAuthor = teamInfo._acl.creator === sessionStorage.getItem("userId");
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                    }).then(function () {
                        this.partial("./templates/details/details.hbs")
                    })
                }).catch(auth.handleError);
        });

        //Load profile
        this.get("#/profile", function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            teamsService.loadTeams().then(function (flights) {
                let userId = sessionStorage.getItem("userId");
                let myFlights = [];
                for (const flight of flights) {
                    if (flight._acl.creator === userId) {
                        myFlights.push(flight);
                    }
                }

                ctx.flights = myFlights;
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial("./templates/profile/profile.hbs");
                })
            });
        });

        //Delete
        this.get("#/delete/:id", function (ctx) {
            let teamId = ctx.params.id.substr(1);
            teamsService.deleteTeam(teamId).then(function () {
                ctx.redirect("#/profile")
            })
        });

    });

    app.run();
});