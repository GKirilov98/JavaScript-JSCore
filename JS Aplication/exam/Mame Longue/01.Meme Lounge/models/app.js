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
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/welcome/welcome.hbs')
            });
        }

        this.get("index.html", displayWelcome);
        this.get("#/index", displayWelcome);

        //Home
        this.get("#/home", displayCatalog);

        function displayCatalog(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.email = sessionStorage.getItem('email');
            teamsService.loadTeams().then(function (mames) {
                ctx.isAuthor = false;
                let userId = sessionStorage.getItem("userId");
                for (const car of mames) {
                    if (car._acl.creator === userId) {
                        car.isAuthor = true;
                    }
                }
                ctx.mames = mames;
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
            let password = context.params.password;
            let repeatPassword = context.params.repeatPass;
            let email = context.params.email;
            let avatarUrl = context.params.avatarUrl;
            if (username.length < 3) {
                auth.showError("Invalid username! It must be least 3 characters long!")
            } else if (!!username.match(/[^A-Za-z]/)) {
                auth.showError("Invalid username! It should contain only english alphabet letters.")
            } else if (password.length < 6) {
                auth.showError("Invalid password! It must be least 6 characters long!")
            } else if (!!password.match(/[^A-Za-z0-9]+/)) {
                auth.showError("Invalid username! It should contain only english alphabet letters and digits.")
            } else if (password !== repeatPassword) {
                auth.showError("Password do not match");
            } else {
                auth.register(username, password, email, avatarUrl)
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
            let password = ctx.params.password;
            if (username.length < 3) {
                auth.showError("Invalid username! It must be least 3 characters long!")
            } else if (!!username.match(/[^A-Za-z]/)) {
                auth.showError("Invalid username! It should contain only english alphabet letters.")
            } else if (password.length < 6) {
                auth.showError("Invalid password! It must be least 6 characters long!")
            } else if (!!password.match(/[^A-Za-z0-9]+/)) {
                auth.showError("Invalid username! It should contain only english alphabet letters and digits.")
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
            let title = ctx.params.title;
            let titleLenght = title.split("").length;
            let description = ctx.params.description;
            let url = ctx.params.imageUrl;
            let creator = sessionStorage.getItem('username');
            let email = sessionStorage.getItem('email');
            let avatarUrl = sessionStorage.getItem('avatarUrl');

            if (title === "" || titleLenght > 33) {
                auth.showError("Title should not exceed 33 characters or non-empty! ")
            } else if (description.length > 450 || description.length < 30) {
                auth.showError("The description must not exceed 450 characters and should be at least 30!")
            } else if (!url.match(/^(http).+/)) {
                auth.showError("Link url should start with 'http'!")
            } else {
                teamsService.createTeam(title, description, url, creator, email, avatarUrl)
                    .then(function (teamInfo) {
                    teamsService.joinTeam(teamInfo._id).then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo(`meme created`);
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
                    ctx.title = teamInfo.title;
                    ctx.description = teamInfo.description;
                    ctx.imageUrl = teamInfo.imageUrl;

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
            let title = ctx.params.title;
            let titleLenght = title.split("").length;
            let description = ctx.params.description;
            let url = ctx.params.imageUrl;

            if (title === "" || titleLenght > 33) {
                auth.showError("Title should not exceed 33 characters or non-empty! ")
            } else if (description.length > 450 || description.length < 30) {
                auth.showError("The description must not exceed 450 characters and should be at least 30!")
            } else if (!url.match(/^(http).+/)) {
                auth.showError("Link url should start with 'http'!")
            } else {
                teamsService.edit(teamId, title, description, url)
                    .then(function () {
                        auth.showInfo(`Meme ${title} updated`);
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
                    ctx.title = teamInfo.title;
                    ctx.description = teamInfo.description;
                    ctx.imageUrl = teamInfo.imageUrl;
                    ctx.creator = teamInfo.creator;
                    ctx.isAuthor = teamInfo._acl.creator === sessionStorage.getItem("userId");
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        // teamControls: "./templates/catalog/teamControls.hbs",
                        // teamMember: "./templates/catalog/teamMember.hbs",
                    }).then(function () {
                        this.partial("./templates/details/details.hbs")
                    })
                }).catch(auth.handleError);
        });

        //Load profile
        this.get("#/profile", function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            teamsService.loadTeams().then(function (mames) {
                ctx.isAuthor = false;
                ctx.email = sessionStorage.getItem("email");
                ctx.avatarUrl = sessionStorage.getItem("avatarUrl");
                let userId = sessionStorage.getItem("userId");
                let myMame = [];
                for (const car of mames) {
                    if (car._acl.creator === userId) {
                        myMame.push(car);
                    }
                }
                ctx.mames = myMame;
                console.log(myMame);
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial("./templates/myProfile/profile.hbs");
                })
            });
        });

        //Delete mame
        this.get("#/delete/:id", function (ctx) {
            let teamId = ctx.params.id.substr(1);
            teamsService.deleteTeam(teamId).then(function () {
                ctx.redirect("#/home")
            })
        });

    });

    app.run();
});