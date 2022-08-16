import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {FromComponent} from './components/from/from.component';
import {ListComponent} from './components/list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { SecondChildrenComponent } from './components/second-children/second-children.component';

@NgModule ( {
    declarations: [
        AppComponent,
        WrapperComponent,
        FromComponent,
        ListComponent,
        FirstComponent,
        SecondComponent,
        SecondChildrenComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule {
}
