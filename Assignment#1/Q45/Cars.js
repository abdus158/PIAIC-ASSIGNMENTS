function store_car_info(manufacturer, model) {
    var carInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        carInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < carInfo.length; i += 2) {
        var key = carInfo[i];
        var value = carInfo[i + 1];
        car[key] = value;
    }
    return car;
}
var carInfo = store_car_info("Toyota", "Corolla", "color", "blue", "year", "2022", "mileage", "5000");
console.log(carInfo);
