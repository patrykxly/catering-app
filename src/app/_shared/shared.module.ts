import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../modules/header/header.module';
import { ConfirmDialogModule } from './_components/confirm-dialog/confirm-dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ConfirmDialogModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ConfirmDialogModule
  ],
})
export class SharedModule {}
