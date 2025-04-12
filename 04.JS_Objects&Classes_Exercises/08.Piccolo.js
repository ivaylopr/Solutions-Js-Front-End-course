function parking(cars) {
    const parkingLot = cars.reduce((acc, curr) => {
        const [operation, plateNumber] = curr.split(', ');

        switch (operation) {
            case 'IN': {
                if (!acc.hasOwnProperty(plateNumber)) {
                    acc[plateNumber] = false;
                }
                acc[plateNumber] = true;
                break;
            };
            case 'OUT': {
                if (acc.hasOwnProperty(plateNumber)) {
                    acc[plateNumber] = false;
                }
            }
                break;

        }
        return acc;
    }, {});

    const inCars = Object.keys(parkingLot)
        .filter((key) => parkingLot[key])
    if (inCars.length === 0) {
        console.log('Parking lot is empty');
        return;
    }
    inCars
        .sort((a, b) => a.localeCompare(b))
        .forEach(x => console.log(x));
}

parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])
