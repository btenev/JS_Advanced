/*
function solve(name, population, treasury) {
    return {
        name,
        population,
        treasury
    }
}
*/

function solve (name, population, treasury) {
    let city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;

    return city;
}

let print = solve('Tortuga',
7000,
15000
);

solve('Santo Domingo',
12000,
23500
);


