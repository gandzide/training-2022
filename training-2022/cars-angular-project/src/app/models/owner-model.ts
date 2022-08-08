export class Owner {
  firstName: string;
  lastName: string;
  cnp: number;
  birthDate: Date;
  gender: string;

  constructor(
    private _fisrtName: string,
    private _lastName: string,
    private _cnp: number,
    private _birthDate: Date,
    private _gender: string
  ) {
    this.firstName = _fisrtName;
    this.lastName = _lastName;
    this.cnp = _cnp;
    this.birthDate = _birthDate;
    this.gender = _gender;
  }

  get getFirstName() {
    return this.firstName;
  }

  set setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  get getLastName() {
    return this.lastName;
  }

  set setLastName(lastName: string) {
    this.lastName = lastName;
  }

  get getCnp() {
    return this.cnp;
  }

  set setCnp(cnp: number) {
    this.cnp = cnp;
  }

  get getBirthDate() {
    return this.birthDate;
  }

  set setBirthDate(birthDate: Date) {
    this.birthDate = birthDate;
  }

  get getGender() {
    return this.gender;
  }

  set setGender(gender: string) {
    this.gender = gender;
  }
}
