function fruitCalculator(type, weight, price) {
    let weightInKg = weight / 1000;

    let totalSum = weightInKg * price;

    console.log(`I need $${totalSum.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}

fruitCalculator('orange', 2500, 1.80);
fruitCalculator('apple', 1563, 2.35);