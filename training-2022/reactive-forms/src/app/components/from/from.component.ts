import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BookModel} from '../models/ItemModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import {debounce, debounceTime, filter, tap} from 'rxjs/operators';

@Component ( {
    selector: 'app-from',
    templateUrl: './from.component.html',
    styleUrls: ['./from.component.scss']
} )
export class FromComponent implements OnInit, OnDestroy {

    @Input () set bookToEdit( book: BookModel ) {
        this._patchBookToForm ( book );
    }

    @Output () outputBook: EventEmitter<BookModel> = new EventEmitter<BookModel> ();

    bookForm?: FormGroup;
    formGroup2: FormGroup;
    subscriptionList: Subscription[] = [];
    customObservable: Subject<string> = new Subject<string>();

    constructor( private _fb: FormBuilder ) {
        this._createForm ();
    }

    ngOnInit() {
        this.customObservable.subscribe((value) => console.warn('I am from custom Observable ', value));
    }

    ngOnDestroy() {
        this.subscriptionList.forEach((sub) => sub.unsubscribe());
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
        this.customObservable.next('form was submitted');
        this.outputBook.emit(book);
        this.bookForm.reset();
    }

    private _createForm() {
        this.bookForm = this._fb.group ( {
            name: ['', [Validators.maxLength ( 10 ), Validators.required]],
            author: [],
            price: [null, [Validators.required, Validators.max ( 100 )]],
        } );
        this.subscriptionList.push(
            this.bookForm.controls.name.valueChanges.subscribe((value: string) => {
                console.log('valoarea din form este ===> ', value);
                // Request la baza.
                // Verifici scrierea.
                // Verfici lungime.
            }),
            this.bookForm.controls.author.valueChanges.pipe(
                debounceTime(2000),
                tap((val) => console.warn('I am a TAP => ', val)),
                filter((val: string) => val.length > 3),
            ).subscribe((value: string) => {
                console.log('valoarea din form este ===> ', value);
                // Request la baza.
                // Verifici scrierea.
                // Verfici lungime.
            })
        );

    }

    private _patchBookToForm( book: BookModel ) {
        if ( !book ) return;
        this.bookForm.controls.name.setValue(book.name);
        this.bookForm.controls.author.setValue(book.author);
        this.bookForm.controls.price.setValue(book.price);
    }
}
