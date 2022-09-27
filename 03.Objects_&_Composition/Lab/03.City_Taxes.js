function solve(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        
        collectTaxes() {
            Math.floor(this.treasury += this.taxRate* this.population);
        } ,

        applyGrowth(percentage) {
            Math.floor(this.population +=  this.population * (percentage / 100));
        } ,

        applyRecession(percentage) {
            Math.floor(this.treasury -= this.treasury * (percentage / 100));
        } 
    }

    return city;
}

// let city = solve('Tortuga',
// 7000,
// 15000,
// );
// console.log(city);

let city =
  solve('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

