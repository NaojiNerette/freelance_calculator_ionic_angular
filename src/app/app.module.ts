import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FreelanceCalculatorComponent } from '../app/freelance-calculator/freelance-calculator.component';
import { CalculationService } from '../app/services/calculation.service';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que esta importación esté presente

@NgModule({
  declarations: [AppComponent, FreelanceCalculatorComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule // Asegúrate de que AppRoutingModule esté incluido aquí
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CalculationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
