import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from '../services/transfer.service';
import {TuiFileLike} from '@taiga-ui/kit';
import {Observable, of, Subject, timer} from 'rxjs';
import {finalize, map, switchMap} from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  form: any;
  fileControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private dialogRef: MatDialogRef<DialogComponent>
    ) {

    this.fileControl = new FormControl(null, [Validators.required]);

    this.form = fb.group({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      file: this.fileControl
    })
  }

  get fc() {
    return this.form.controls
  }

  removeFile(): void {
      this.fileControl.setValue(null);
  }

  async save() {
    let fd = new FormData();
    fd.append('title', this.form.value.title);
    fd.append('file', this.form.value.file);
    console.log(fd)
    this.dataService.uploadForm(`http://localhost:8080/1/reports/upload`, fd).subscribe(_ =>
      this.dialogRef.close()
    );
  }

  // async login() {
  //   const value = this.loginForm.value
  //   if (!(value.email)) return;
  //   const body = {
  //     login: value.email
  //   }
  //   await this.authService.login(body).subscribe(id => {
  //     this.sendIdToMainComponent(id)
  //     this.routes.navigateByUrl('main')
  //   })
  // }

  // sendIdToMainComponent(id: number) {
  //   localStorage.setItem('id', String(id));
  //   this.transferService.sendData(id);
  // }
}
