import { Component, OnInit } from '@angular/core';
import { Owner } from '../../models/owner-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-owner',
  templateUrl: './add-new-owner.component.html',
  styleUrls: ['./add-new-owner.component.scss'],
  // host refers to component for adding attributes
  // host: {
  //   class: 'align-items-center',
  // }
})
export class AddNewOwnerComponent implements OnInit {
  componentTitle: string = 'Add new owner';

  //cream un obiect de car
  //adaugam la lista de car carList
  //resetati valorrile din form

  // firstDate: Date = new Date(1995, 12, 26);
  // secondDate: Date = new Date(1986, 6, 12);

  // fisrtOwner: Owner = new Owner(
  //   'Mike',
  //   'Walter',
  //   1223556,
  //   this.firstDate,
  //   'male'
  // );
  // secondOwner: Owner = new Owner(
  //   'Tamara',
  //   'Stan',
  //   4253456,
  //   this.secondDate,
  //   'female'
  // );
  // thirdOwner: Owner = new Owner(
  //   'Ted',
  //   'Smith',
  //   123455,
  //   new Date(2010, 4, 10),
  //   'male'
  // );

  // owners: Owner[] = [this.fisrtOwner, this.secondOwner, this.thirdOwner];

  owners: Owner[] = [];

  submitForm(form: NgForm) {
    console.log('my form is ', form);
    const newOwner: Owner = new Owner(
      form.value.firstName,
      form.value.lastName,
      form.value.cnp,
      form.value.birthDate,
      'female'
    );
    this.owners.push(newOwner);
    console.log(this.owners);
    form.reset();
  }

  // showOwnersList() {
  //   console.log(this.owners);
  // }

  constructor() {
    // this.showOwnersList();
  }

  ngOnInit(): void {}
}
