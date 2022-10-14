import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaloricRequirementCalculatorRoutingModule } from './caloric-requirement-calculator-routing.module';
import { CaloricRequirementCalculatorComponent } from './caloric-requirement-calculator/caloric-requirement-calculator.component';
import { HeaderModule } from '../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CaloricRequirementInfoDialogComponent } from './caloric-requirement-info-dialog/caloric-requirement-info-dialog.component';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [CaloricRequirementCalculatorComponent, CaloricRequirementInfoDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    CaloricRequirementCalculatorRoutingModule,
    MatCardModule,
    MatSelectModule,
  ],
})
export class CaloricRequirementCalculatorModule {}
