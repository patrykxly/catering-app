import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaloricRequirementCalculatorComponent } from './modules/caloric-requirement-calculator/caloric-requirement-calculator/caloric-requirement-calculator.component';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  { path: 'calculator', loadChildren: () => import('./modules/caloric-requirement-calculator/caloric-requirement-calculator.module').then(m => m.CaloricRequirementCalculatorModule) },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
