const carMarket =  require("./obj")

// ...........................................................................................

searchAgency = function(inp) {
    const result = carMarket.sellers.find(seller => 
        seller.agencyName.toLowerCase() === inp.toLowerCase() || 
        seller.agencyId === inp
    );

    return result ? result : "Agency not found!";
}

console.log(searchAgency("Best Deal")); 
console.log(searchAgency("26_IPfHU1"));  

// ...........................................................................................

onlineAgencys =function () {
    const isOnline =  carMarket.sellers.map(name => name.agencyName) ;
    return isOnline
    
}
 console.log(onlineAgencys())

// ...........................................................................................

addCar = function (agencyName, carNumber) {
    let agency = carMarket.sellers.find(seller => 
        seller.agencyName.toLowerCase() === agencyName.toLowerCase()
    );

    if (!agency) {
        return 'no such agency';
    }

    let carToAdd = carMarket.customers.find(customer => 
        customer.cars.some(car => car.carNumber === carNumber)
    );

    if (!carToAdd ) {
        return 'car not found in customers';
    }
    let car = carToAdd.cars.find(car => car.carNumber === carNumber);
    agency.cars.push(car);  
    return 'car was added';
}

// console.log(addCar('Best Deal', 'WIh0U')); 
// ...........................................................................................

removeCar = function (agencyName, carNumber) {

    let agency = carMarket.sellers.find (seller => 
            seller.agencyName.toLowerCase() === agencyName.toLowerCase())
    
            if(!agency) {
                return 'no such agency';
            }

            for(let brand of agency.cars) {
               const carIndex = brand.models.findIndex(car => car.carNumber === carNumber)

               if(carIndex !== -1) {
                brand.models.splice(carIndex, 1)
                return 'car delete'
               }
            }
                return 'car not found'
            }
    
            // console.log(removeCar('Best Deal', 'AZJZ4')); 
     
// ...........................................................................................

let agencyNames = [];
agencyNames.push(...onlineAgencys()); 
let operations = [searchAgency, onlineAgencys, addCar, removeCar];

cashRegister = function (agency, operation, carNumber) {
 
    let agencyName = carMarket.sellers.find(seller => 
    seller.agencyName.toLowerCase() === agency.toLowerCase())

    if (!agencyName) {
        console.log('Agency not found:', agency);
        return;
    }

    let a = agencyName.cash;
    console.log(a)
    
    let Customer = carMarket.customers.find(customer => 
        customer.cars.find(car => car.carNumber === carNumber));

    let car;
    if (Customer) {
        car = Customer.cars.find(car => car.carNumber === carNumber);
    }

    if (!car) {
        console.log('Car not found:', carNumber);
    }

    let b = car.price;
    console.log(b)

    if (operation === removeCar) {
        return a + b; 
    } 
    else if (operation === addCar) {
        return a - b;
    }
    else {
        console.error("Invalid operation provided");
        return a;
    }
}
// console.log(cashRegister(agencyNames[0], operations[2], "16da1"));


// ...........................................................................................

function updateCarPrice(agencyName, carNumber, newPrice) {
    const agency = this.sellers.find(seller => seller.agencyName === agencyName);
    
    if (!agency) {
        console.log("Agency not found!");
        return;
    }

    let grabCar;
    for (let car of agency.cars) {
        for (let model of car.models) {
            if (model.carNumber === carNumber) {
                grabCar = model;
                break;
            }
        }
        if (grabCar) break;
    }
    
    if (!grabCar) {
        console.log("Car not found in the agency!");
        return;
    }

    grabCar.price = newPrice;
    console.log(`Updated car price for car number (${grabCar.carNumber}) to : ${newPrice} `);
}

carMarket.updateCarPrice = updateCarPrice;

carMarket.updateCarPrice("Best Deal", "AZJZ4", 150000);



// function updateCarPrice() {
//     return this.customers.map(customer => customer.name);}
// carMarket.updateCarPrice = updateCarPrice;
// console.log(carMarket.updateCarPrice());
