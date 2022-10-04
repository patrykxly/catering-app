import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaloricRequirementCalculatorComponent } from './caloric-requirement-calculator/caloric-requirement-calculator.component';

const routes: Routes = [{ path: '', component: CaloricRequirementCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaloricRequirementCalculatorRoutingModule { }
