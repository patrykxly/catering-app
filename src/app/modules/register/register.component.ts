import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
    mailCtrl: ['',Validators.required],
    passwordCtrl: ['', Validators.required],  
    repeatPasswordCtrl: ['', Validators.required]
  })

  constructor(private _formBuilder: FormBuilder) { }

}
