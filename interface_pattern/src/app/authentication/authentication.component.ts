import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TransferService } from '../services/transfer.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  signupForm: any;
  loginForm: any;
  roles;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private transferService: TransferService,
    private routes: Router
    ) {

    this.signupForm = fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),

      // password: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(4)
      // ]),

      role: new FormControl('', [
        Validators.required
      ])
    })

    this.loginForm = fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    })

    this.roles = ['INSPECTOR', 'SCIENTIST']
  }

  get lfc() {
    return this.loginForm.controls
  }

  get sfc() {
    return this.signupForm.controls
  }

  async signup() {
    const value = this.signupForm.value
    if (!(value.email)) return;
    const body = {
      login: value.email,
      userRole: value.role
    }
    await this.authService.signup(body).subscribe(resp => {
      localStorage.setItem('id', String(resp.id));
      localStorage.setItem('role', String(resp.userRole));
      this.routes.navigateByUrl('main')
    })
  }

  async login() {
    const value = this.loginForm.value
    if (!(value.email)) return;
    const body = {
      login: value.email
    }
    await this.authService.login(body).subscribe(resp => {
      localStorage.setItem('id', String(resp.id));
      localStorage.setItem('role', String(resp.userRole));
      this.routes.navigateByUrl('main')
    })
  }

  // sendIdToMainComponent(id: number) {
  //   localStorage.setItem('id', String(id));
  //   this.transferService.sendData(id);
  // }
}
