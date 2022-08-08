import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddNewOwnerComponent } from './components/add-new-owner/add-new-owner.component';
import { AddNewCarComponent } from './components/car-wrapper/add-new-car/add-new-car.component';
import { AddNewInsuranceComponent } from './components/add-new-insurance/add-new-insurance.component';
import { FormsModule } from '@angular/forms';
import { CarWrapperComponent } from './car-wrapper/car-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddNewOwnerComponent,
    AddNewCarComponent,
    AddNewInsuranceComponent,
    CarWrapperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
