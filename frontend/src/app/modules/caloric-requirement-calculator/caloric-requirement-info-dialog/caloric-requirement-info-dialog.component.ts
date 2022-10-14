import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-caloric-requirement-info-dialog',
  templateUrl: './caloric-requirement-info-dialog.component.html',
  styleUrls: ['./caloric-requirement-info-dialog.component.scss'],
})
export class CaloricRequirementInfoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CaloricRequirementInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}
}
