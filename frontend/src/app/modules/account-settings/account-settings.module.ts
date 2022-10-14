import { NgModule } from '@angular/core';

import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { AccountSettingsComponent } from './account-settings.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [
    AccountSettingsRoutingModule,
    SharedModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
})
export class AccountSettingsModule {}
