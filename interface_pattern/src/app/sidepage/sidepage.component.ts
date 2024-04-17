import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TUI_ARROW } from '@taiga-ui/kit';
// import { HandletokenService } from '../services/handletoken.service';

@Component({
  selector: 'app-sidepage',
  templateUrl: './sidepage.component.html',
  styleUrls: ['./sidepage.component.scss']
})
export class SidepageComponent {

  constructor( 
    // private tokenService: HandletokenService,
    private routes: Router) {}

  isOpen: boolean = false

  readonly arrow = TUI_ARROW;
 
    readonly groups = [
        {
            label: `Компоненты`,
            items: [
                {
                    label: 'Главная страница',
                    routerLink: 'main',
                },
                // {
                //     label: 'Редактирование отчета',
                //     routerLink: 'post',
                // },
            ],
        }
    ];

    exit() {
        // this.tokenService.clearToken()
        this.routes.navigateByUrl("login")
      }
}
