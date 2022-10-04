import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailDialogComponent } from 'src/app/modules/carousel/detail-dialog/detail-dialog.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CarouselComponent,
    DetailDialogComponent,
    OrderDialogComponent,
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    RouterModule
  ],
  exports: [CarouselComponent],
})
export class CarouselModule {}
