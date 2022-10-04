import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaloricRequirementCalculatorRoutingModule } from './caloric-requirement-calculator-routing.module';
import { CaloricRequirementCalculatorComponent } from './caloric-requirement-calculator/caloric-requirement-calculator.component';
import { HeaderModule } from '../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [CaloricRequirementCalculatorComponent],
  imports: [
    CommonModule,
    CaloricRequirementCalculatorRoutingModule,
    HeaderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
})
export class CaloricRequirementCalculatorModule {}
