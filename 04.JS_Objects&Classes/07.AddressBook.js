function addressBook(input){
    let book = {};
    for (const element of input) {
        const [name,address] = element.split(`:`);
        book[name]=address;
    }
    Object.entries(book)
    .sort((a,b)=>a[0].localeCompare(b[0]))
    .forEach(([name,address])=>console.log(`${name} -> ${address}`));
    
}


addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])
