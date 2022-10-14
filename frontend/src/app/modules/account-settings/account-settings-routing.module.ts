import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsGuard } from '@shared/_guards/settings/settings.guard';
import { AccountSettingsComponent } from './account-settings.component';

const routes: Routes = [{ path: '', component: AccountSettingsComponent, canActivate: [SettingsGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingsRoutingModule { }
