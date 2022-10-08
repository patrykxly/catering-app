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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaloricRequirementInfoDialogComponent } from './caloric-requirement-info-dialog/caloric-requirement-info-dialog.component';
@NgModule({
  declarations: [CaloricRequirementCalculatorComponent, CaloricRequirementInfoDialogComponent],
  imports: [
    CommonModule,
    CaloricRequirementCalculatorRoutingModule,
    HeaderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class CaloricRequirementCalculatorModule {}
