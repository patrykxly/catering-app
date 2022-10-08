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

  range!: FormGroup;

  minDate!: Date;

  fullPrice!: number;

  daysChosen!: number;

  chosenRadioValue!: number;

  chosenCalorieAmount!: string;

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

    this.range = this._formBuilder.group({
      start: [
        new FormControl<Date | null>({ value: null, disabled: true }),
        Validators.required,
      ],
      end: [
        new FormControl<Date | null>({ value: null, disabled: true }),
        Validators.required,
      ],
    });

    this.minDate = new Date();
  }

  onRadioClick(): void {
    if (this.fullPrice)
      this.setFullPriceAndchosenCalorieAmountAfterCalculated();
  }

  onCountPrice(): void {
    this.setFullpriceAndchosenCalorieAmount(
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

  private setFullpriceAndchosenCalorieAmount(chosenRadioValue: string): void {
    this.daysChosen =
      (this.range.value.end!.getTime() - this.range.value.start!.getTime()) /
      (1000 * 60 * 60 * 24);
    this.fullPrice = Number(chosenRadioValue) * this.daysChosen;
    this.chosenCalorieAmount =
      ((Number(chosenRadioValue) - this.data.price) / 3) * 500 + 2000 + ' kcal';
  }

  private setFullPriceAndchosenCalorieAmountAfterCalculated(): void {
    this.radioButtonGroup
      .get('radioCtrl')
      ?.valueChanges.pipe(
        startWith(''),
        tap((chosenRadioValue) => {
          this.setFullpriceAndchosenCalorieAmount(chosenRadioValue as string);
        })
      )
      .subscribe();
  }
}
