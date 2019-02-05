const baseURL = "https://baas.kinvey.com/";
const app_key = "kid_SkDm1N11E";
const app_secret = "a8ce46d5c3d345f2abe596e5281ffd54";
const base64 = btoa(app_key + ":" + app_secret);
const authHeader = {
    "Authorization": "Basic " + base64,
    //"Content-type": "application/json" //<---Very Import for POST method kinvey
};



const kinveyController = (function () {
    //CREAT
    function registerUser(username, password, firstName, lastName, phone, email) {
        $.ajax({
            method: "POST",
            url: baseURL + 'user/' + app_key + "/",
            headers: authHeader,
            data: {username, password, firstName, lastName, phone, email}
        }).then(function (result) {
              saveAuthInSession(result);
            }).catch(handleError)

    }

    function loginUser(username, password) {
        $.ajax({
            method: "POST",
            url: baseURL + 'user/' + app_key + "/login",
            headers: authHeader,
            data: {username, password}
        }).then(function (result) {
            saveAuthInSession(result);
        }).catch(handleError)

    }
    //UPDATE (PUT)
    function editUser(firstName, lastName, phone, email) {
        $.ajax({
            method: "PUT",
            url: baseURL + 'user/' + app_key + "/" + sessionStorage.getItem("id"),
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
            data: {firstName, lastName, phone, email}
        }).then(function (res) {
            saveAuthInSession(res);
        }).catch(handleError)

    }

    function saveAuthInSession(userData) {
        sessionStorage.setItem("id", userData._id);
        sessionStorage.setItem("authToken", userData._kmd.authtoken);
        sessionStorage.setItem("firstName", userData.firstName);
        sessionStorage.setItem("lastName", userData.lastName);
        sessionStorage.setItem("phone", userData.phone);
        sessionStorage.setItem("email", userData.email);
    }

    function handleError(error) {
        console.log(error.statusText)

    }

    return {registerUser, loginUser, editUser}
})();

