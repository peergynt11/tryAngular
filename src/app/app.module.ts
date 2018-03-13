import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { JqwidgetsModule } from './try/jqwidgets/jqwidgets.module';
import { BindingComponent } from './try/binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BindingComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    JqwidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
