export class Insurance {
  company: string;
  id: number;
  cardId: number;
  directPay: string;
  paymentType: string;
  start: Date;
  end: Date;
  price: number;
  notes: string;

  constructor(
    private _company: string,
    private _id: number,
    private _cardId: number,
    private _directPay: string,
    private _paymentType: string,
    private _start: Date,
    private _end: Date,
    private _price: number,
    private _notes: string
  ) {
    this.company = _company;
    this.id = _id;
    this.cardId = _cardId;
    this.directPay = _directPay;
    this.paymentType = _paymentType;
    this.start = _start;
    this.end = _end;
    this.price = _price;
    this.notes = _notes;
  }

  get getCompany() {
    return this.company;
  }

  set setCompany(company: string) {
    this.company = company;
  }

  get getId() {
    return this.id;
  }

  set setId(id: number) {
    this.id = id;
  }

  get getCardId() {
    return this.cardId;
  }

  set setCardId(cardId: number) {
    this.cardId = cardId;
  }

  get getDirectPay() {
    return this.directPay;
  }

  set setDirectPay(directPay: string) {
    this.directPay = directPay;
  }

  get getPaymentType() {
    return this.paymentType;
  }

  set setPaymentType(paymentType: string) {
    this.paymentType = paymentType;
  }

  get getStart() {
    return this.start;
  }

  set setStart(start: Date) {
    this.start = start;
  }

  get getEnd() {
    return this.end;
  }

  set setEnd(end: Date) {
    this.end = end;
  }

  get getPrice() {
    return this.price;
  }

  set setPrice(price: number) {
    this.price = price;
  }

  get getNotes() {
    return this.notes;
  }

  set setNotes(notes: string) {
    this.notes = notes;
  }
}
