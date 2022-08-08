import { FuelType } from "../enums/fuel-type.enum";

export interface Car {
  brand?: string;
  year?: number;
  fuelType?: FuelType;
}