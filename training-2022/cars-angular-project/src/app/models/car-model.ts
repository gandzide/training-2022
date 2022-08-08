export class Car {
  brand: string;
  model: string;
  cubicCap: number;
  serialNumber: number; //string
  ownerId: number; //string
  type: string;
  plates: number; //string
  fuelType: string;
  power: number;

  constructor(
    private _brand: string,
    private _model: string,
    private _cupicCap: number,
    private _serialNumber: number, //string
    private _ownerId: number, //string
    private _type: string,
    private _plates: number, //string
    private _fuelType: string,
    private _power: number
  ) {
    this.brand = _brand;
    this.model = _model;
    this.cubicCap = _cupicCap;
    this.serialNumber = _serialNumber;
    this.ownerId = _ownerId;
    this.type = _type;
    this.plates = _plates;
    this.fuelType = _fuelType;
    this.power = _power;
  }

  get getBrand() {
    return this.brand;
  }

  set setBrand(brand: string) {
    this.brand = brand;
  }

  get getModel() {
    return this.model;
  }

  set setModel(model: string) {
    this.model = model;
  }

  get getCubicCap() {
    return this.cubicCap;
  }

  set setCubicCap(cubicCap: number) {
    this.cubicCap = cubicCap;
  }

  get getSerialNumber() {
    return this.serialNumber;
  }

  set setSerialNumber(serialNumber: number & string) {
    this.serialNumber = serialNumber;
  }

  get getOwnerId() {
    return this.ownerId;
  }

  set setOwnerId(ownerId: number & string) {
    this.ownerId = ownerId;
  }

  get getType() {
    return this.type;
  }

  set setType(type: string) {
    this.type = type;
  }

  get getPlates() {
    return this.plates;
  }

  set setPlates(plates: number) {
    this.plates = plates;
  }

  get getFuelType() {
    return this.fuelType;
  }

  set setFuelType(fuelType: string) {
    this.fuelType = fuelType;
  }

  get getPower() {
    return this.power;
  }

  set setPower(power: number) {
    this.power = power;
  }
}
