let auth = (() => {
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);

        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);

        let username = userInfo.username;
        sessionStorage.setItem('username', username);

        sessionStorage.setItem('teamId', userInfo.teamId);

        // let email = userInfo.email;
        // sessionStorage.setItem('email', email);

        // let avatarUrl = userInfo.avatarUrl;
        // sessionStorage.setItem('avatarUrl', avatarUrl);
    }

    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', 'login', 'basic', userData);
    }

    // user/register
    function register(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', '', 'basic', userData);
    }

    // user/logout
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return requester.post('user', '_logout', 'kinvey', logoutData);
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    // function showInfo(message) {
    //     let infoBox = $('#infoBox');
    //     infoBox.text(message);
    //     infoBox.show();
    //     setTimeout(() => infoBox.fadeOut(), 3000);
    // }
    //
    // function showError(message) {
    //     let errorBox = $('#errorBox');
    //     errorBox.text(message);
    //     errorBox.show();
    //     setTimeout(() => errorBox.fadeOut(), 3000);
    // }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.html($(`<span>${message}</span>`));
        infoBox.show();
        $('#infoBox span').on("click", function () {
            infoBox.fadeOut()
        });
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.html($(`<span>${message}</span>`));
        errorBox.show();
        $('#errorBox span').on("click", function () {
            errorBox.fadeOut()
        });
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    return {
        login,
        register,
        logout,
        saveSession,
        showInfo,
        showError,
        handleError
    }
})();