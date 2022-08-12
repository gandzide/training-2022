import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {FromComponent} from './components/from/from.component';
import {ListComponent} from './components/list/list.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule ( {
    declarations: [
        AppComponent,
        WrapperComponent,
        FromComponent,
        ListComponent
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
