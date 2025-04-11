function storeProvision(stock, orderStock) {
    let currentStock = [];
    let currentEl = {};
    stock.forEach((element, i) => {
        if (i % 2 === 0) {
            currentEl = {
                name: element,
                number: Number(stock[i + 1])
            };
            currentStock.push(currentEl)
        }
    });
    orderStock.forEach((element,i)=>{
        if (i%2===0) {
            currentEl={
                name: element,
                number: Number(orderStock[i+1])
            }
            if (currentStock.some(obj=>obj.name===currentEl.name)) {
                let existing = currentStock.find(obj => obj.name === currentEl.name);
                existing.number += currentEl.number;
            } else{
                currentStock.push(currentEl);
            }
        }
    })
    currentStock.forEach(element => {
        console.log(`${element.name} -> ${element.number}`);
        
    });
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
