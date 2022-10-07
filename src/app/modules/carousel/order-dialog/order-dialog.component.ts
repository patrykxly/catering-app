import { Component, Inject, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { startWith, tap } from 'rxjs';
import { FoodSetCardModel } from 'src/app/_shared/_models/foodSetCardModel';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
})
export class OrderDialogComponent implements OnInit {
  radioButtonGroup!: FormGroup;

  dateFormGroup!: FormGroup;

  range!: FormGroup;

  minDate!: Date;

  fullPrice!: number;

  chosenCalorieOption!: string;

  daysChosen!: number;

  chosenRadioValue!: number;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FoodSetCardModel,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.radioButtonGroup = this._formBuilder.group({
      radioCtrl: ['', Validators.required],
    });
  
    this.dateFormGroup = this._formBuilder.group({
      secondCtrl: [new Date(), Validators.required],
    });
  
    this.range = this._formBuilder.group({
      start: new FormControl<Date | null>({ value: null, disabled: true }),
      end: new FormControl<Date | null>({ value: null, disabled: true }),
    });
    
    this.minDate = new Date();
  }

  onRadioClick(): void {
    if (this.fullPrice)
      this.setFullPriceAndChosenCalorieOptionAfterCalculated();
  }

  onSecondStepClick(): void {
    console.log('xd');
  }

  onCountPrice(): void {
    this.setFullpriceAndChosenCalorieOption(
      this.radioButtonGroup.get('radioCtrl')?.value as string
    );
  }

  onCalculateCaloricRequirementClick(): void {
    this.dialogRef.close();
    this.router.navigate(['calculator']);
  }

  onConfirm(): void {
    this.dialogRef.close();
  }

  private setFullpriceAndChosenCalorieOption(chosenRadioValue: string): void {
    this.daysChosen =
      (this.range.value.end!.getTime() - this.range.value.start!.getTime()) /
      (1000 * 60 * 60 * 24);
    this.fullPrice = Number(chosenRadioValue) * this.daysChosen;
    this.chosenCalorieOption =
      String(((Number(chosenRadioValue) - this.data.price) / 3) * 500 + 2000) +
      'kcal';
  }

  private setFullPriceAndChosenCalorieOptionAfterCalculated(): void {
    this.radioButtonGroup
      .get('radioCtrl')
      ?.valueChanges.pipe(
        startWith(''),
        tap((chosenRadioValue) => {
          this.setFullpriceAndChosenCalorieOption(chosenRadioValue as string);
        })
      )
      .subscribe();
  }
}
