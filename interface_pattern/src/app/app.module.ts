import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiSvgModule, TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule } from "@taiga-ui/core";
import { TuiTextAreaModule, TuiInputPasswordModule, TuiInputModule, TuiTagModule, TuiArrowModule, TuiCheckboxModule } from '@taiga-ui/kit';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
// import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
// import { InterceptorInterceptor } from "./services/interceptor.interceptor";
import { PostsComponent } from './posts/posts.component';
import { SearchPipe } from './pipes/search.pipe';
import { SidepageComponent } from './sidepage/sidepage.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    MainpageComponent,
    PostsComponent,
    SearchPipe,
    SidepageComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiInputPasswordModule,
      TuiTextAreaModule,
      TuiInputModule,
      TuiSvgModule,
      TuiButtonModule,
      TuiTableModule,
      TuiTagModule,
      TuiLetModule,
      TuiDataListModule,
      TuiArrowModule,
      TuiHostedDropdownModule,
      TuiCheckboxModule,
      NgxPaginationModule
],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    // { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
