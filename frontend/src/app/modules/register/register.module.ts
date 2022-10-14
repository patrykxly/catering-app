import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    MatCardModule,
    MatSnackBarModule
    
  ]
})
export class RegisterModule { }
