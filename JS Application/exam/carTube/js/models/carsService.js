let carsService = (() => {
    function loadCars() {
        // Request teams from db
        return requester.get('appdata', 'cars', 'kinvey');
    }

    function loadCarDetails(teamId) {
        return requester.get('appdata', 'cars/' + teamId, 'kinvey');
    }

    function edit(teamId, title, description, brand, fuel, year, price, imageUrl, model, seller) {
        let teamData = {
            title, description, brand, fuel, year, price, imageUrl, model, seller
        };

        return requester.update('appdata', 'cars/' + teamId, 'kinvey', teamData);
    }

    function createCar(title, description, brand, fuel, year, price, imageUrl, model, seller) {
        let teamData = {
            title, description, brand, fuel, year, price, imageUrl, model, seller
        };

        return requester.post('appdata', 'cars', 'kinvey', teamData);
    }

    function deleteCar(teamId) {
        let endpoint = `cars/${teamId}`;

        return requester.remove('appdata', endpoint, 'kinvey');
    }

    //using it with create page
    function joinTeam(teamId) {
        let userData = {
            username: sessionStorage.getItem('username'),
            teamId: teamId
        };

        return requester.update('user', sessionStorage.getItem('userId'), 'kinvey', userData);
    }

    // function leaveTeam() {
    //     let userData = {
    //         username: sessionStorage.getItem('username'),
    //         teamId: ''
    //     };
    //
    //    return requester.update('user', sessionStorage.getItem('userId'), userData, 'kinvey');
    // }


    return {
         loadCars,
        loadCarDetails,
        edit,
        createCar,
        joinTeam,
        //leaveTeam,
        deleteCar
    }
})();