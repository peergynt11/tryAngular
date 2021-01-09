import { BrowserModule, Title } from '@angular/platform-browser';
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
import { ConfigService } from './shared/config.service';
import { ModalComponent } from './try/modal/modal.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { CountClicks } from './shared/directives/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BindingComponent,
    Binding2Component,
    ObservableComponent,
    CalculationComponent,
    ModalComponent,
    HighlightDirective,
    CountClicks
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
  providers: [CalculationService, ConfigService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
