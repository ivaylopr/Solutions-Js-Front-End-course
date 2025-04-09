function jsonToObject(info){
    const information = JSON.parse(info);
    Object.keys(information).forEach(key=>{
        console.log(`${key}: ${information[key]}`);
        
    })
}
