import { Component, Inject, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FoodSetCardModel } from 'src/app/_shared/_models/foodSetCardModel';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
})
export class OrderDialogComponent implements OnInit {
  radioButtonGroup = this._formBuilder.group({
    radioCtrl: ['', Validators.required],
  });
  firstFormGroup = this._formBuilder.group({
    firstCtrl: [new Date(), Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  minDate!: Date;

  fullPrice!: number;

  chosenCalorieOptionPrice!: number;

  chosenCalorieOption!: string;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FoodSetCardModel,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.minDate = new Date();
  }

  onCountPrice(): void {
    const daysChosen = (this.range.value.end!.getTime()-this.range.value.start!.getTime())/(1000 * 60 * 60 * 24);
    this.fullPrice = this.chosenCalorieOptionPrice*daysChosen;
    this.chosenCalorieOption = String((this.chosenCalorieOptionPrice-this.data.price)/3*500+2000) + "kcal";
  }

  onCalculateCaloricRequirementClick(): void {
    this.dialogRef.close();
    this.router.navigate(['calculator']);
  }

  onConfirm(): void {
    this.dialogRef.close();
  }
}
