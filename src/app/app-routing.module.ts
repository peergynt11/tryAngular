import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { JqwidgetsComponent } from './try/jqwidgets/jqwidgets.component';
import { BindingComponent } from './try/binding/binding.component';
import { CalculationComponent } from './calculation/calculation.component';
import { ObservableComponent } from './try/observable/observable.component';

const routes: Routes = ([
  { path: 'welcome', component: WelcomeComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'observable', component: ObservableComponent},
  { path: 'calculation', component: CalculationComponent },
  { path: 'jqwidgets', component: JqwidgetsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
])


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
