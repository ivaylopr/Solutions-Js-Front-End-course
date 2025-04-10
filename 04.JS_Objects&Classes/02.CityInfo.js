function cityInfo({name,area,population,country,postCode}){
    let city = {name,area,population,country,postCode};
    let cityKeys = Object.keys(city);
    for (const prop of cityKeys) {
        console.log(`${prop} -> ${city[[prop]]}`);
        
    }
}
