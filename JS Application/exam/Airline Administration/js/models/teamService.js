let teamsService = (() => {
    const collectionName = "flights";

    function loadTeams() {
        // Request teams from db
        return requester.get('appdata', `${collectionName}`, 'kinvey');
    }

    function loadTeamDetails(teamId) {
        return requester.get('appdata', `${collectionName}/` + teamId, 'kinvey');
    }

    function edit(teamId, destination, origin, departureDate, creator, departureTime, seats, cost, img, isPublic) {
        let teamData = {
            destination, origin, departureDate,
            creator, departureTime, seats, cost, img, isPublic
        };

        return requester.update('appdata', `${collectionName}/` + teamId, 'kinvey', teamData);
    }

    function createTeam(destination, origin, departureDate, creator, departureTime, seats, cost, img,  isPublic) {
        let teamData = {
            destination, origin, departureDate,
            creator, departureTime, seats, cost, img,  isPublic
        };

        return requester.post('appdata', `${collectionName}`, 'kinvey', teamData);
    }


    function joinTeam(teamId) {
        let userData = {
            username: sessionStorage.getItem('username'),
            teamId: teamId
        };

        return requester.update('user', sessionStorage.getItem('userId'), 'kinvey', userData);
    }

    function leaveTeam() {
        let userData = {
            username: sessionStorage.getItem('username'),
            teamId: ''
        };

        return requester.update('user', sessionStorage.getItem('userId'), userData, 'kinvey');
    }

    function deleteTeam(teamId) {
        let endpoint = `${collectionName}/${teamId}`;

        return requester.remove('appdata', endpoint, 'kinvey');
    }




    return {
        loadTeams,
        loadTeamDetails,
        edit,
        createTeam,
        joinTeam,
        leaveTeam,
        deleteTeam
    }
})();