import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { LoginRequestDto } from '../dto/login.dto';
import { TransferService } from '../services/transfer.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  form: any

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private transferService: TransferService,
    private routes: Router
    ) {

    this.form = fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),

      role: new FormControl('', [
        Validators.required
      ])
    })
  }

  get fc() {
    return this.form.controls
  }

  async login() {
    const value = this.form.value
    if (!(value.email || value.password)) return;
    const body = {
      email: value.email,
      role: value.role
    }
    const isAuthorized = await this.authService.login(body).subscribe(_ => {
      this.sendIdToMainComponent(_.id)
    })
    if (!isAuthorized) return;
    this.routes.navigateByUrl('main')
  }

  sendIdToMainComponent(id: number) {
    this.transferService.sendData(id);
  }
}
