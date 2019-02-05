function ticketsScan(text, command) {
    let regexName = /((.|\n)*?)\s+([A-Za-z]+)-([A-Za-z]+)( |\.-([A-Za-z]+)\s+)/gm;
    let regexAirpot = /((.|\n)*?)\s+(([A-Z]{3})\/([A-Z]{3}))\s+/gm;
    let regexFlight = /((.|\n)*?)\s+([A-Z]{1,3}[0-9]{1,5})\s+/gm;
    let regexCompany = /((.|\n)*?)-\s+([A-Za-z]+\*[A-Za-z]+)\s+/gm;
    //fullName
    let nameMatch = regexName.exec(text);
    let fullName = nameMatch[0].trim().split("-").join(" ");
    //Airport
    let airportMatch = regexAirpot.exec(text);
    let airport = [];
    if (airportMatch !== null) {
        airportMatch.filter((x) => x);
        airport.push(airportMatch[airportMatch.length - 2]);
        airport.push(airportMatch[airportMatch.length - 1]);
    }
    //Flight
    let flightMatch = regexFlight.exec(text);
    let flight;
    if (flightMatch !== null) {
        flight = flightMatch[flightMatch.length - 1];
    }
   //company
    let companyMatch = regexCompany.exec(text);
    let company;
    if (companyMatch != null){
        company = companyMatch[companyMatch.length -1];
    }
    //second Part
    switch (command) {
        case 'name':
            console.log(`Mr/Ms, ${fullName}, have a nice flight!`);
            break;
        case 'flight':
            console.log(`Your flight number ${flight} is from ${airport[0]} to ${airport[1]}.`);
            break;
        case 'company':
            console.log(`Have a nice flight with ${company.replace("*", " ")}.`);
            break;
        case 'all':
            console.log(`Mr/Ms, ${fullName}, your flight number ${flight} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company.replace("*"," ")}.`);
            break;
    }
}

ticketsScan(' TEST-T   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'all');
