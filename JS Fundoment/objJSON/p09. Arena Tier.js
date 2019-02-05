function arenaTier(arr) {
    let gPool = {};
    for (let i = 0; i < arr.length - 1; i++) {
        let command = arr[i];
        command = command.split(" -> ");
        if (command.length === 3) {
            let gladiator = command[0];
            let technique = command[1];
            let skill = +command[2];
            if (gPool[gladiator] == null) {
                gPool[gladiator] = {};
            }

            if (gPool[gladiator][technique]) {
                if (gPool[gladiator][technique] < skill) {
                    gPool[gladiator][technique] = skill;
                }
            } else {
                gPool[gladiator][technique] = skill;
            }

        } else {
            command = arr[i].split(" vs ");
            let firstGladiator = command[0];
            let secondGladiator = command[1];


            if (gPool[firstGladiator] && gPool[secondGladiator]){
                let skillFirstList =Object.keys(gPool[firstGladiator]);
                let skillSecondList =Object.keys(gPool[secondGladiator]);
                let sameSkills = false;
                for (let j = 0; j < skillFirstList.length ; j++) {
                    for (let k = 0; k < skillSecondList.length; k++) {
                        if (skillFirstList[j] === skillSecondList[k]){
                            sameSkills = true;
                            break;
                        }
                    }
                    if (sameSkills){break;}
                }

                if (sameSkills) {
                    let firstPoints = Object.values(gPool[firstGladiator]).reduce((a, c) => a + c);
                    let secondPoints = Object.values(gPool[secondGladiator]).reduce((a, c) => a + c);
                    let loser = Math.min(firstPoints, secondPoints);
                    if (loser === firstPoints) {
                        gPool[firstGladiator] = null;
                    } else {
                        gPool[secondGladiator] = null;
                    }
                }
            }
        }
    }


    let name = Object.keys(gPool).filter((x) => gPool[x] !== null).sort((a, b) => {
        let first = Object.values(gPool[a]).reduce((acc, cur) => acc + cur);
        let second = Object.values(gPool[b]).reduce((acc, cur) => acc + cur);
        return second - first || a.localeCompare(b);
    });
    for (let gladiator of name) {
        let skillPoints = Object.values(gPool[gladiator]).reduce((a, c) => a + c);
        console.log(`${gladiator}: ${skillPoints} skill`);
        Object.keys(gPool[gladiator]).sort((a,b) => {
            return (gPool[gladiator][b] - gPool[gladiator][a]) || a.localeCompare(b);
        }).forEach((x)=>{
            console.log(`- ${x} <!> ${gPool[gladiator][x]}`);
        });
    }
}

arenaTier([
       'Pesho -> Duck -> 400',
       'Julius -> Shield -> 150',
       'Gladius -> Heal -> 200',
       'Gladius -> Support -> 250',
       'Gladius -> Shield -> 250',
       'Pesho vs Gladius',
       'Gladius vs Julius',
       'Gladius vs Gosho',
       'Ave Cesar'
    ]
);