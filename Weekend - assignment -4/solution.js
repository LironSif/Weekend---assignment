const carMarket =  require("./obj")


// .......................................Search for a car agency by its name or ID....................................................


searchAgency = function(inp) {
    const result = carMarket.sellers.find(seller => 
        seller.agencyName.toLowerCase() === inp.toLowerCase() || 
        seller.agencyId === inp
    );

    return result ? result : "Agency not found!";
}

console.log(searchAgency("Best Deal")); 
console.log(searchAgency("26_IPfHU1"));  


// // ...........................................Retrieve all agencies' names.................................................


onlineAgencys =function () {
    const isOnline =  carMarket.sellers.map(name => name.agencyName) ;
    return isOnline
    
}
 console.log(onlineAgencys())


// // .................................Add a new car to an agency's inventory..........................................................


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

console.log(addCar('Best Deal', 'WIh0U')); 


// .........................................Remove a car from an agency's inventory:...........................................................


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
    
            console.log(removeCar('Best Deal', 'AZJZ4')); 
     


// // ........................................Change the cash or credit of an agency...................................................



function updateAgencyFinance(carMarket, agencyId, newCash, newCredit) {
    const agency = carMarket.sellers.find(seller => seller.agencyId === agencyId);
    if (!agency) return 'Agency not found';
    if (newCash !== undefined) agency.cash = newCash;
    if (newCredit !== undefined) agency.credit = newCredit;
  }


// .................................Update the price of a specific car in an agency ........................................................



updateCarPrice = function (agency, carId, priceToChange) {
    let price = parseInt(priceToChange);
    let pickedAgency = carMarket.sellers.find(seller => seller.agencyName === agency);
    
    if (!pickedAgency) {
        console.error('Agency not found');
        return;
    }
    
    let pickedBrand = pickedAgency.cars.find(brand => brand.models.some(car => car.carNumber === carId));
    
    if (!pickedBrand) {
        console.error('Brand not found');
        return;
    }
    
    let pickedCar = pickedBrand.models.find(car => car.carNumber === carId);
    
    if (!pickedCar) {
        console.error('Car not found');
        return;
    }
    
    pickedCar.price = price;

    console.log(pickedCar);
    return
}
console.log(updateCarPrice("Best Deal","AZJZ4", '500'))


// ..............................Calculate and return the total revenue for a specific agency.............................................


function getTotalAgencyRevenue(carMarket, agencyId) {
    const agency = carMarket.sellers.find(seller => seller.agencyId === agencyId);
    if (!agency) return 'Agency not found';
    let totalRevenue = 0;
    agency.cars.forEach(brand => {
      brand.models.forEach(model => {
        totalRevenue += model.price;
      });
    });
    return totalRevenue;
  }
  

  