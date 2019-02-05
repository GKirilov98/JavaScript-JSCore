function result(name, age, weight, height) {
    let person = {
        name: name
    };

    person.personalInfo = {
        age: age,
        weight: weight,
        height: height
    };
    person.BMI = +(person.personalInfo.weight / (person.personalInfo.height / 100) ** 2).toFixed(0);
    let status = "";
    if (person.BMI < 18.5) {
        status = "underweight";
        person.status = status;
    } else if (person.BMI < 25) {
        status = "normal";
        person.status = status;
    } else if (person.BMI < 30) {
        status = "overweight";
        person.status = status;
    } else {
        status = "obese";
        person.status = status;
        person.recommendation = "admission required";
    }

    return person;
}
