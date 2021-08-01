var HouseBuilder = /** @class */ (function () {
    function HouseBuilder() {
        this.house = new House();
    }
    HouseBuilder.prototype.setBuildingType = function (buildingType) {
        this.house.buildingType = buildingType;
        return this;
    };
    HouseBuilder.prototype.setWallMaterial = function (wallMaterial) {
        this.house.wallMaterial = wallMaterial;
        return this;
    };
    HouseBuilder.prototype.setNumberDoors = function (number) {
        this.house.doors = number;
        return this;
    };
    HouseBuilder.prototype.setNumberWindows = function (number) {
        this.house.windows = number;
        return this;
    };
    HouseBuilder.prototype.getResult = function () {
        return this.house;
    };
    return HouseBuilder;
}());
var House = /** @class */ (function () {
    function House() {
        this.doors = 0;
        this.windows = 0;
        this.wallMaterial = '';
        this.buildingType = '';
    }
    House.prototype.construction = function () {
        return "This is a " + this.wallMaterial + " " + this.buildingType + " with " + this.doors + " door(s) and " + this.windows + " window(s).";
    };
    return House;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.construct = function () {
        return new HouseBuilder()
            .setBuildingType('')
            .setWallMaterial('')
            .setNumberDoors(1)
            .getResult();
    };
    return Director;
}());
