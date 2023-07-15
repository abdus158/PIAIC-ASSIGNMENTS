function store_car_info(manufacturer: string, model: string, ...carInfo: string[]): object {
    let car: any = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < carInfo.length; i += 2) {
      let key = carInfo[i];
      let value = carInfo[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  let carInfo = store_car_info("Toyota", "Corolla", "color", "blue", "year", "2022", "mileage", "5000");
  console.log(carInfo);
  