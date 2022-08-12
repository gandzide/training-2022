import {Component, OnInit, Output} from '@angular/core';
import {BookModel} from '../models/ItemModel';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  bookToEdit?: BookModel;
  newBook: any;

  constructor() { }

  ngOnInit() {
  }

  setItemToEdit( book: BookModel ) {
    this.bookToEdit = book;
  }

  sendBookToList( book: BookModel ) {
    this.newBook = book;
  }
}
