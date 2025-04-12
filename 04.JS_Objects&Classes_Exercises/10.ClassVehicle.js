
    class Vehicle{
        constructor(type,model,parts,fuel) {
            this.type=type;
            this.model=model;
            this.parts = {
                 ...parts,
                quality: parts.engine*parts.power
            };
            this.fuel=fuel;
        }
        drive(fuelConsuption){
            this.fuel-=fuelConsuption;
        }
    }


let parts = {engine:6, power:100}
let vehicle = new Vehicle('Mercedes','C-class',parts,180);
vehicle.drive(100);
console.log(vehicle.fuel);

