interface IHouseBuilder {
  house: House
  setBuildingType(buildingType: string): this
  setWallMaterial(wallMaterial: string): this
  setNumberDoors(number: number): this
  setNumberWindows(number: number): this
  getResult(): House
}

class HouseBuilder implements IHouseBuilder {
  house: House

  constructor() {
      this.house = new House()
  }

  setBuildingType(buildingType: string): this {
      this.house.buildingType = buildingType
      return this
  }

  setWallMaterial(wallMaterial: string): this {
      this.house.wallMaterial = wallMaterial
      return this
  }

  setNumberDoors(number: number): this {
      this.house.doors = number
      return this
  }

  setNumberWindows(number: number): this {
      this.house.windows = number
      return this
  }

  getResult(): House {
      return this.house
  }
}


class House {
  doors = 0
  windows = 0
  wallMaterial = ''
  buildingType = ''

  construction(): string {
      return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
  }
}

class Director {
  static construct(): House {
      return new HouseBuilder()
          .setBuildingType('')
          .setWallMaterial('')
          .setNumberDoors(1)
          .getResult()
  }
}


