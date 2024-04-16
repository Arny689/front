import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PostsComponent } from './posts/posts.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  { path: 'login', component: AuthenticationComponent},
  { path: '', component: MainLayoutComponent, children: [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', component: MainpageComponent },
    { path: 'post', component: PostsComponent },
  ]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
