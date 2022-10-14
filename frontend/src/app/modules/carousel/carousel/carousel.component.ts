import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodSetCardModel } from '@shared/_models/foodSetCardModel';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() foodSets: FoodSetCardModel[] = [];

  constructor(public dialog: MatDialog) {}

  openDetailDialog(foodSet: FoodSetCardModel): void {
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      width: '30%',
      data: {
        name: foodSet.name,
        price: foodSet.price,
        description: foodSet.description,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.info('Detail dialog closed');
    });
  }

  openOrderDialog(foodSet: FoodSetCardModel): void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '30%',
      data: { name: foodSet.name, price: foodSet.price },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.info('Order dialog closed');
    });
  }
}
