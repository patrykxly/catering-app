import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/_guards/auth/auth.guard';
import { RegisterComponent } from './register.component';

const routes: Routes = [{ path: '', component: RegisterComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
