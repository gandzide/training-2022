import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Car } from '../../../models/car-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss'],
})
export class AddNewCarComponent implements OnInit {
  componentTitle: string = 'Add new car';

  cars: Car[] = [];
  @Output() addCarToList: EventEmitter<Car> = new EventEmitter<Car>();

  submitForm(form: NgForm) {
    const newCar: Car = new Car(
      form.value.brand,
      form.value.model,
      form.value.cubicCap,
      form.value.serialNumber,
      1223445,
      'type',
      form.value.plates,
      'hybrid',
      form.value.power
    );

    this.cars.push(newCar);
    console.log(this.cars);
    form.reset();
  }

  constructor() {
    // this.componentTitle = 'Adauga o masina'
  }

  ngOnInit(): void {}
}
