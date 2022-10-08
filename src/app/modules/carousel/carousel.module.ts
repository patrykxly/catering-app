import { NgModule } from '@angular/core';
import { DetailDialogComponent } from 'src/app/modules/carousel/detail-dialog/detail-dialog.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [
    CarouselComponent,
    DetailDialogComponent,
    OrderDialogComponent,
  ],
  imports: [
    SharedModule,
    NgbCarouselModule,
    MatDialogModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
  exports: [CarouselComponent],
})
export class CarouselModule {}
