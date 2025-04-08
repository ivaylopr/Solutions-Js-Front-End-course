function loadingBar(percentige){
    let load = new Array(10).fill('.',0,10);
    if (percentige===100) {
        load.fill('%',0,10);
        console.log(`${percentige}% Complete!`);
        console.log(`[${load.join('')}]`);
    } else{
        const procentToFill=percentige/10;
        load.fill('%',0,procentToFill);
        console.log(`${percentige}% [${load.join('')}]`);
        console.log('Still loading...');
    }
}

loadingBar(100);
