import { Component, NgModule, OnInit } from '@angular/core';
import { Insurance } from '../../models/insurance-model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-new-insurance',
  templateUrl: './add-new-insurance.component.html',
  styleUrls: ['./add-new-insurance.component.scss'],
})
export class AddNewInsuranceComponent implements OnInit {
  insurances: Insurance[] = [];
  submitForm(form: NgForm) {
    const newInsurance = new Insurance(
      form.value.company,
      3456789,
      3444,
      'card',
      'card',
      form.value.start,
      form.value.end,
      form.value.price,
      form.value.notes
    );

    this.insurances.push(newInsurance);
    console.log(this.insurances);
    form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
