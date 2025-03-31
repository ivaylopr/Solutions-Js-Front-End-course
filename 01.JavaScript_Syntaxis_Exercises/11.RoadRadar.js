function roadRadar(speed, zone) {
    let limit = 0;
    switch (zone) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let speedStatus = "";
        const overSpeed = speed - limit;
        if (overSpeed <= 20) {
            speedStatus = 'speeding';
        } else if (overSpeed > 20 && overSpeed <= 40) {
            speedStatus = 'excessive speeding';
        } else if (overSpeed > 40) {
            speedStatus = 'reckless driving';
        }
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - ${speedStatus}`);
    }
}
roadRadar(120, 'interstate');
