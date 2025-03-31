function fruit(type, grams,price){
    const totalPrice = (grams * price)/1000;
    const weight = grams/1000;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);
}

fruit('orange',2500,1.80)
