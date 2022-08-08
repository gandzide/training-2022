import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/car-model';

@Component({
  selector: 'app-car-wrapper',
  templateUrl: './car-wrapper.component.html',
  styleUrls: ['./car-wrapper.component.scss']
})
export class CarWrapperComponent implements OnInit {

  carList: Car[] = [];
  constructor() { }

  ngOnInit() {
  }

  addCarToList( car: Car ) {

  }
}
