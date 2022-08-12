import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from '../models/ItemModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component ( {
    selector: 'app-from',
    templateUrl: './from.component.html',
    styleUrls: ['./from.component.scss']
} )
export class FromComponent implements OnInit {

    @Input () set bookToEdit( book: BookModel ) {
        this._patchBookToForm ( book );
    }

    @Output () outputBook: EventEmitter<BookModel> = new EventEmitter<BookModel> ();

    bookForm?: FormGroup;

    constructor( private _fb: FormBuilder ) {
        this._createForm ();
    }

    ngOnInit() {
    }

    submitForm() {
        if (this.bookForm.status === 'INVALID') {
            this.bookForm.controls.name.markAsTouched();
            this.bookForm.controls.price.markAsTouched();
            return;
        }
        const rawValues = this.bookForm.getRawValue();
        const book: BookModel = {
            name: rawValues.name,
            author: rawValues.author,
            price: rawValues.price
        };
        this.outputBook.emit(book);
        this.bookForm.reset();
    }

    private _createForm() {
        this.bookForm = this._fb.group ( {
            name: ['', [Validators.maxLength ( 10 ), Validators.required]],
            author: [],
            price: [null, [Validators.required, Validators.max ( 100 )]]
        } );
    }

    private _patchBookToForm( book: BookModel ) {
        if ( !book ) return;
        this.bookForm.controls.name.setValue(book.name);
        this.bookForm.controls.author.setValue(book.author);
        this.bookForm.controls.price.setValue(book.price);
    }
}
