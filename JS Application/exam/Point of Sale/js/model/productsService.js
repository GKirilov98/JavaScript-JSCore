let productsService = (() => {
    function loadProducts() {
        // Request teams from db
        return requester.get('appdata', 'SPA', 'kinvey');
    }

    function loadCarDetails(teamId) {
        return requester.get('appdata', 'SPA/' + teamId, 'kinvey');
    }

    function edit(teamId, title, description, brand, fuel, year, price, imageUrl, model, seller) {
        let teamData = {
            title, description, brand, fuel, year, price, imageUrl, model, seller
        };

        return requester.update('appdata', 'SPA/' + teamId, 'kinvey', teamData);
    }

    function createProduct(type, qty, price, currTotalPrice) {
        let teamData = {
            type, qty, price, currTotalPrice
        };

        return requester.post('appdata', 'SPA', 'kinvey', teamData);
    }

    function deleteCar(teamId) {
        let endpoint = `SPA/${teamId}`;

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
         loadProducts,
        loadCarDetails,
        edit,
        createProduct,
        joinTeam,
        //leaveTeam,
        deleteCar
    }
})();