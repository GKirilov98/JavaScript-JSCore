let teamsService = (() => {
    function loadTeams() {
        // Request teams from db
        return requester.get('appdata', 'mameLongue', 'kinvey');
    }

    function loadTeamDetails(teamId) {
        return requester.get('appdata', 'mameLongue/' + teamId, 'kinvey');
    }

    function edit(teamId, title, description, imageUrl) {
        let teamData = {
            title: title,
            description: description,
            imageUrl: imageUrl,
            creator: sessionStorage.getItem('username')
        };

        return requester.update('appdata', 'mameLongue/' + teamId, 'kinvey', teamData);
    }

    function createTeam(title, description, imageUrl, creator, email, avatarUrl) {
        let teamData = {
            title,
            description,
            imageUrl: imageUrl,
            email: email,
            avatarUrl: avatarUrl,
            creator
        };

        return requester.post('appdata', 'mameLongue', 'kinvey', teamData);
    }


    function joinTeam(teamId) {
        let userData = {
            username: sessionStorage.getItem('username'),
            email: sessionStorage.getItem('email'),
            avatarUrl: sessionStorage.getItem('avatarUrl'),
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
        let endpoint = `mameLongue/${teamId}`;

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