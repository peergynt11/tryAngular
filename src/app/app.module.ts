import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { JqwidgetsModule } from './try/jqwidgets/jqwidgets.module';
import { BindingComponent } from './try/binding/binding.component';
import { Binding2Component } from './try/binding/binding2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculationService } from './calculation/calculation.service';
import { CalculationComponent } from './calculation/calculation.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './try/observable/observable.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BindingComponent,
    Binding2Component,
    ObservableComponent,
    CalculationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    JqwidgetsModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
