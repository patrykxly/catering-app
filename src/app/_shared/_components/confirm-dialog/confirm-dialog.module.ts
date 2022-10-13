import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    MatButtonModule,
  ],
})
export class ConfirmDialogModule {}
