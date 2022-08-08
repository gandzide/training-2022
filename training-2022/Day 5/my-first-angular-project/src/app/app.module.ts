import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first-component/my-first-component.component';
import { CarWrapperComponent } from './car-wrapper/car-wrapper.component';
import { CarHeaderComponent } from './car-wrapper/car-header/car-header.component';
import { CarDetailsComponent } from './car-wrapper/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    CarWrapperComponent,
    CarHeaderComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
