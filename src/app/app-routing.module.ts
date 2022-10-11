import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  { path: 'calculator', loadChildren: () => import('./modules/caloric-requirement-calculator/caloric-requirement-calculator.module').then(m => m.CaloricRequirementCalculatorModule) },
  {
    path: '',
    component: HomeComponent
  },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  {
    path: "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
