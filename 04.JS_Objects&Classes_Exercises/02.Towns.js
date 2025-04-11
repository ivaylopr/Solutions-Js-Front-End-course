function towns(input) {
    let townList = [];
    input.forEach(townInfo => {
        const [name, townLatitude, townLongitude] = townInfo.split(' | ');
        townList.push
            ({
                town: name,
                latitude: Number(townLatitude).toFixed(2),
                longitude: Number(townLongitude).toFixed(2)
            });
    });
    townList.forEach(town => {
        console.log(town);
    })
}


towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )
