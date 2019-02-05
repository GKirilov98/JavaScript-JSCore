function gameOfEpicness(obj, matrix) {
    let kingdoms = {};
    let winLoseKingdoms = {};
    let winLoseGenerals = {};
    for (let i = 0; i < obj.length; i++) {
        let tokens = obj[i];
        let kingdomT = tokens.kingdom;
        let generalT = tokens.general;
        let armyT = +tokens.army;
        if (kingdoms[kingdomT] == null) {
            kingdoms[kingdomT] = {};
            winLoseGenerals[kingdomT] = {};
            winLoseKingdoms[kingdomT] = {};
        }

        if (kingdoms[kingdomT][generalT] == null) {
            kingdoms[kingdomT][generalT] = armyT;
            winLoseGenerals[kingdomT][generalT] = {};
            winLoseGenerals[kingdomT][generalT]["wins"] = 0;
            winLoseGenerals[kingdomT][generalT]["lose"] = 0;
            winLoseKingdoms[kingdomT]["wins"] = 0;
            winLoseKingdoms[kingdomT]["lose"] = 0;
        } else {
            kingdoms[kingdomT][generalT] += armyT;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let attackingKingdom = matrix[i][0];
        let attackingGeneral = matrix[i][1];
        let defendingKingdom = matrix[i][2];
        let defendingGeneral = matrix[i][3];
        if (attackingKingdom !== defendingKingdom) {
            let attackPower = kingdoms[attackingKingdom][attackingGeneral];
            let defencePower = kingdoms[defendingKingdom][defendingGeneral];
            if (attackPower === defencePower) {
                continue;
            }

            if (Math.min(attackPower, defencePower) === defencePower) {
                winLoseKingdoms[attackingKingdom]["wins"]++;
                winLoseKingdoms[defendingKingdom]["lose"]++;

                winLoseGenerals[attackingKingdom][attackingGeneral]["wins"]++;
                winLoseGenerals[defendingKingdom][defendingGeneral]["lose"]++;

                kingdoms[defendingKingdom][defendingGeneral] =
                    Math.floor(kingdoms[defendingKingdom][defendingGeneral] * 0.90);
                kingdoms[attackingKingdom][attackingGeneral] =
                    Math.floor(kingdoms[attackingKingdom][attackingGeneral] * 1.10);
            } else {
                winLoseKingdoms[attackingKingdom]["lose"]++;
                winLoseKingdoms[defendingKingdom]["wins"]++;

                winLoseGenerals[attackingKingdom][attackingGeneral]["lose"]++;
                winLoseGenerals[defendingKingdom][defendingGeneral]["wins"]++;

                kingdoms[defendingKingdom][defendingGeneral] =
                    Math.floor(kingdoms[defendingKingdom][defendingGeneral] * 1.10);
                kingdoms[attackingKingdom][attackingGeneral] =
                    Math.floor(kingdoms[attackingKingdom][attackingGeneral] * 0.90);
            }
        }
    }

    let winner = Object.keys(winLoseKingdoms).sort((a, b) => {
        return winLoseKingdoms[b].wins - winLoseKingdoms[a].wins || winLoseKingdoms[a].lose - winLoseKingdoms[b] || a.localeCompare(b);
    });
    let generals = Object.keys(winLoseGenerals[winner[0]])
        .sort((a, b) => {
          return kingdoms[winner[0]][b] - kingdoms[winner[0]][a] || a.localeCompare(b);
              //winLoseGenerals[winner[0]][b]["wins"] - winLoseGenerals[winner[0]][a]["wins"] ||  winLoseGenerals[winner[0]][a]["lose"] || winLoseGenerals[winner[0]][b]["lose"] ;

        });

    console.log(`Winner: ${winner[0]}`);
    for (let i = 0; i < generals.length; i++) {
        console.log(`/\\general: ${generals[i]}`);
        console.log(`---army: ${kingdoms[winner[0]][generals[i]]}`);
        console.log(`---wins: ${winLoseGenerals[winner[0]][generals[i]]["wins"]}`);
        console.log(`---losses: ${winLoseGenerals[winner[0]][generals[i]]["lose"]}`);
    }
}


gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]

);