import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodSetCardModel } from '@shared/_models/foodSetCardModel';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss'],
})
export class DetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FoodSetCardModel,
    public dialog: MatDialog
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  openOrderDialog(foodSet: FoodSetCardModel): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '50%',
      data: { name: foodSet.name, price: foodSet.price },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.info('Order dialog closed');
    });
  }
}
