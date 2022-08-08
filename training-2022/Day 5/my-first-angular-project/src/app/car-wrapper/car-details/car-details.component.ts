import { Component } from '@angular/core';
import { FuelType } from 'src/app/enums/fuel-type.enum';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {

  title = 'My title';

  car: Car = {
    brand: 'Toyota',
    year: 2022
  };

  car1: Car = {
    brand: 'Toyota',
    year: 2022
  };

}
