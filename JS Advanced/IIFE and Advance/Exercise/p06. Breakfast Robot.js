function breakfastRobot() {
    let microElemets = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function (str) {
        let tokens = str.split(" ");

        switch (tokens[0]) {
            case 'restock':
                addStock(tokens[1].toLowerCase(), +tokens[2]);
               return printRestock();
            case 'prepare':
                let success = prepareRecipe(tokens[1].toLowerCase(), +tokens[2]);
               return printPrepare(success);
            case 'report':
               return printReport();
        }
        function recipeMicroElements(food, quantity) {
            let recipe = {
                protein: 0,
                carbohydrate: 0,
                fat: 0,
                flavour: 0
            };

            switch (food) {
                case 'apple':
                    recipe.carbohydrate = 1 * quantity;
                    recipe.flavour = 2 * quantity;
                    break;
                case 'coke':
                    recipe.carbohydrate = 10 * quantity;
                    recipe.flavour = 20 * quantity;
                    break;
                case 'burger':
                    recipe.carbohydrate = 5 * quantity;
                    recipe.flavour = 3 * quantity;
                    recipe.fat = 7 * quantity;
                    break;
                case 'omelet':
                    recipe.protein = 5 * quantity;
                    recipe.fat = 1 * quantity;
                    recipe.flavour = 1 * quantity;
                    break;
                case 'cheverme':
                    recipe.protein = 10 * quantity;
                    recipe.carbohydrate = 10 * quantity;
                    recipe.fat = 10 * quantity;
                    recipe.flavour = 10 * quantity;
                    break;
            }
            return recipe;
        }

        function prepareRecipe(food, quantity) {
            let neededMicroEl = recipeMicroElements(food, quantity);
            let missing = "";
            if (microElemets.protein < neededMicroEl.protein) {
                missing = "protein";
            } else if (microElemets.carbohydrate < neededMicroEl.carbohydrate) {
                missing = "carbohydrate";
            } else if (microElemets.fat < neededMicroEl.fat) {
                missing = "fat";
            } else if (microElemets.flavour < neededMicroEl.flavour) {
                missing = "flavour";
            } else {
                microElemets.protein -= neededMicroEl.protein;
                microElemets.carbohydrate -= neededMicroEl.carbohydrate;
                microElemets.flavour -= neededMicroEl.flavour;
                microElemets.fat -= neededMicroEl.fat;
                missing = false;
            }
            return missing;
        }

        function addStock(microEl, quantity) {
            microElemets[microEl] += +quantity;
        }

        function printReport() {
            return `protein=${microElemets.protein} carbohydrate=${microElemets.carbohydrate} fat=${microElemets.fat} flavour=${microElemets.flavour}`;
        }

        function printRestock() {
            return "Success";
        }

        function printPrepare(missing) {
            if (!missing){
                return "Success";
            } else {
               return `Error: not enough ${missing} in stock`;
            }
        }
    };
}

let manager = breakfastRobot();
manager("restock carbohydrate 10");
manager("restock flavour 10");
manager("prepare apple 1");
manager("restock fat 10");
manager("prepare burger 1");
manager("report");