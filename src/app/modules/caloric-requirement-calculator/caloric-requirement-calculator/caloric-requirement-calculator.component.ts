import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-caloric-requirement-calculator',
  templateUrl: './caloric-requirement-calculator.component.html',
  styleUrls: ['./caloric-requirement-calculator.component.scss'],
})
export class CaloricRequirementCalculatorComponent {
  calculateCaloricRequirementForm: FormGroup;

  calories!: number;

  caloriesCalculated: boolean = false;

  isFormInvalidAfterSubmit: boolean = false;

  constructor(private _formBuilder: FormBuilder) {
    this.calculateCaloricRequirementForm = this._formBuilder.group({
      gender: ['', Validators.required],
      age: [null, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
      activity: ['', Validators.required],
    });
  }

  onSubmitClick(): void {
    if(this.calculateCaloricRequirementForm.invalid) {
      this.isFormInvalidAfterSubmit = true;
      return;
    }
    this.setCalories();
    this.isFormInvalidAfterSubmit = false;
    this.caloriesCalculated = true;
  }

  private setCalories(): void {
    this.calories =
      this.calculateCaloricRequirementForm.controls['gender'].value === 'male'
        ? 66.47 +
          13.75 *
            this.calculateCaloricRequirementForm.controls['weight'].value +
          5.003 *
            this.calculateCaloricRequirementForm.controls['height'].value -
          6.755 * this.calculateCaloricRequirementForm.controls['age'].value
        : 655.1 +
          9.563 *
            this.calculateCaloricRequirementForm.controls['weight'].value +
          1.85 * this.calculateCaloricRequirementForm.controls['height'].value -
          4.676 * this.calculateCaloricRequirementForm.controls['age'].value;
    this.setCaloriesAdequateToActivity();
    this.calories = Number(this.calories.toPrecision(3));
  }

  private setCaloriesAdequateToActivity(): void {
    switch (this.calculateCaloricRequirementForm.controls['activity'].value) {
      case 'low': {
        this.calories *= 1.2;
        break;
      }
      case 'regular': {
        this.calories *= 1.55;
        break;
      }
      case 'high': {
        this.calories *= 1.9;
        break;
      }
    }
  }
}
