function gameOfEpic(arr, matrix) {
    let allKingdoms = {};
    let generalWins = {};
    let generalLoses = {};
    for (let i = 0; i < arr.length; i++) {
        let kingdom = arr[i].kingdom;
        let general = arr[i].general;
        let army = arr[i].army;
        if (allKingdoms[kingdom] == null) {
            allKingdoms[kingdom] = {};
            generalWins[kingdom] = {};
            generalLoses[kingdom] = {};
        }

        if (allKingdoms[kingdom][general] == null) {
            allKingdoms[kingdom][general] = army;
            generalWins[kingdom][general] = 0;
            generalLoses[kingdom][general] = 0;
        } else {
            allKingdoms[kingdom][general] += army;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let attackingKingdom = matrix[i][0];
        let attackingGeneral = matrix[i][1];
        let defendingKingdom = matrix[i][2];
        let defendingGeneral = matrix[i][3];
        if (attackingKingdom === defendingKingdom) {
            continue;
        }
        let attackArmy = allKingdoms[attackingKingdom][attackingGeneral];
        let defendArmy = allKingdoms[defendingKingdom][defendingGeneral];
        if (attackArmy > defendArmy) {
            generalWins[attackingKingdom][attackingGeneral]++;
            generalLoses[defendingKingdom][defendingGeneral]++;
            allKingdoms[attackingKingdom][attackingGeneral] = Math.floor(attackArmy * 1.10);
            allKingdoms[defendingKingdom][defendingGeneral] = Math.floor(defendArmy * 0.90);
        } else if (defendArmy > attackArmy) {
            generalWins[defendingKingdom][defendingGeneral]++;
            generalLoses[attackingKingdom][attackingGeneral]++;
            allKingdoms[attackingKingdom][attackingGeneral] = Math.floor(attackArmy * 0.90);
            allKingdoms[defendingKingdom][defendingGeneral] = Math.floor(defendArmy * 1.10);
        }
    }

    let winnerKingdom = Object.keys(generalWins).sort((a, b) => {
        return Object.values(generalWins[b]).reduce((acc, cur) => {return acc + cur ;}) -
            Object.values(generalWins[a]).reduce((acc, cur) => {return acc + cur ;}) ||
            Object.values(generalLoses[a]).reduce((acc, cur) => {return acc + cur ;}) -
            Object.values(generalLoses[b]).reduce((acc, cur) => {return acc + cur ;}) ||
            a.localeCompare(b);
    });
    let generalsOfWinner = Object.keys(allKingdoms[winnerKingdom[0]])
        .sort((a,b) => {
            return allKingdoms[winnerKingdom[0]][b] - allKingdoms[winnerKingdom[0]][a]
        });
    console.log(`Winner: ${winnerKingdom[0]}`);
    for (let i = 0; i < generalsOfWinner.length; i++) {
        console.log(`/\\general: ${generalsOfWinner[i]}`);
        console.log(
            `---army: ${allKingdoms[winnerKingdom[0]][generalsOfWinner[i]]}\n` +
            `---wins: ${generalWins[winnerKingdom[0]][generalsOfWinner[i]]}\n` +
            `---losses: ${generalLoses[winnerKingdom[0]][generalsOfWinner[i]]}`
        )
    }
}

gameOfEpic([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);