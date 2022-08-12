import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from '../models/ItemModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  bookList: BookModel[] = [];
  @Input() set newBook(book: BookModel) {
    if (!!book) {
      this.bookList.push(book);
    }
  }

  @Output() sendToEdit: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  ngOnInit() {
    this._addSomeDummyBook();
  }

  editBook(book: BookModel) {
    this.sendToEdit.emit(book);
  }

  private _addSomeDummyBook() {
    this.bookList = [
      {
        name: 'Agile Bible',
        author: 'Pidorel',
        price: 666
      },
      {
        name: 'ABC',
        author: 'Dorel',
        price: 13
      }
    ];
  }
}
