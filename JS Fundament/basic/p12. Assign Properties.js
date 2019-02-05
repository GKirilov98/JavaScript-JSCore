function assignProperties(array){
    "use strict";
    let object = {};

    let arrayElements = array.length;
    for(let index = 0; index < arrayElements - 1; index += 2)
    {
        let property = array[index];
        let value = array[index + 1];

        object[property] = value;
    }
    console.log(object);
}