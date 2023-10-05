import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { PenaltyCalculatorComponent } from './penalty-calculator/penalty-calculator.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutFormComponent,
    PenaltyCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
