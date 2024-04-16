import { Component } from '@angular/core';

interface User {
  readonly surname: string;
  readonly email: string;
  readonly status: 'alive' | 'deceased';
  readonly tags: readonly string[];
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  readonly columns = ['surname', 'email', 'status', 'tags', 'actions']
 
  users: readonly User[] = [
      {
          surname: 'Michael Palin',
          email: 'm.palin@montypython.com',
          status: 'alive',
          tags: ['Funny'],
      },
      {
          surname: 'Eric Idle',
          email: 'e.idle@montypython.com',
          status: 'alive',
          tags: ['Funny', 'Music'],
      },
      {
          surname: 'John Cleese',
          email: 'j.cleese@montypython.com',
          status: 'alive',
          tags: ['Funny', 'Tall', 'Actor'],
      },
      {
          surname: 'Terry Jones',
          email: '',
          status: 'deceased',
          tags: ['Funny', 'Director'],
      },
      {
          surname: 'Terry Gilliam',
          email: 't.gilliam@montypython.com',
          status: 'alive',
          tags: ['Funny', 'Director'],
      },
      {
          surname: 'Graham Chapman',
          email: '',
          status: 'deceased',
          tags: ['Funny', 'King Arthur'],
      },
  ];

  remove(item: User): void {
      this.users = this.users.filter(user => user !== item);
  }

}
