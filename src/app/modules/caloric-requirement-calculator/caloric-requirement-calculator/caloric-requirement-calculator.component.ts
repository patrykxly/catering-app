import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CaloricRequirementInfoDialogComponent } from '../caloric-requirement-info-dialog/caloric-requirement-info-dialog.component';

@Component({
  selector: 'app-caloric-requirement-calculator',
  templateUrl: './caloric-requirement-calculator.component.html',
  styleUrls: ['./caloric-requirement-calculator.component.scss'],
})
export class CaloricRequirementCalculatorComponent {
  calculateCaloricRequirementForm: FormGroup;

  calories!: number;

  isEveryInputFilled: boolean = true;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
    this.calculateCaloricRequirementForm = this._formBuilder.group({
      gender: ['', Validators.required],
      age: [
        null,
        [
          Validators.required,
          CaloricRequirementCalculatorComponent.forbiddenAgeValidator(),
        ],
      ],
      height: [
        null,
        [
          Validators.required,
          CaloricRequirementCalculatorComponent.forbiddenHeightValidator(),
        ],
      ],
      weight: [
        null,
        [
          Validators.required,
          CaloricRequirementCalculatorComponent.forbiddenWeightValidator(),
        ],
      ],
      activity: ['', Validators.required],
    });
  }

  static forbiddenAgeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isAgeForbidden = control.value < 0 || control.value > 122;
      return isAgeForbidden ? { forbiddenAge: { value: control.value } } : null;
    };
  }

  static forbiddenHeightValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isHeightForbidden = control.value < 55 || control.value > 251;
      return isHeightForbidden
        ? { forbiddenHeight: { value: control.value } }
        : null;
    };
  }

  static forbiddenWeightValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isWeightForbidden = control.value < 0 || control.value > 400;
      return isWeightForbidden
        ? { forbiddenWeight: { value: control.value } }
        : null;
    };
  }

  onSubmitClick(): void {
    if (!this.isFormValid()) return;
    this.setCalories();
    this.isEveryInputFilled = true;
    this.openCaloricRequirementInfoDialog();
  }

  openCaloricRequirementInfoDialog(): void {
    const dialogRef = this.dialog.open(CaloricRequirementInfoDialogComponent, {
      width: '30%',
      data: {
        calories: this.calories,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.info('Caloric requirement info dialog closed');
    });
  }

  private isFormValid(): boolean {
    if (
      Object.keys(this.calculateCaloricRequirementForm.controls).find(
        (key) =>
          this.calculateCaloricRequirementForm?.get(key)?.errors?.['required']
      )
    ) {
      this.isEveryInputFilled = false;
      return false;
    }
    if (
      Object.keys(this.calculateCaloricRequirementForm.controls).find(
        (key) => this.calculateCaloricRequirementForm?.get(key)?.invalid
      )
    )
      return false;
    return true;
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
