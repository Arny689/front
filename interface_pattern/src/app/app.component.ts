import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interface_pattern'

  constructor(private routes: Router) {}

  currentRout: string = '/'

  fromMainPage: string

  // reciveRoute($event: any) {
  //   this.fromMainPage = $event
  // }

  // getRoute(): string {

  //   console.log(this.currentRout)
  //   return this.currentRout
  // }
}
