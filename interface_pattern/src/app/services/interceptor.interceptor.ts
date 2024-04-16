// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpResponse
// } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';
// import { HandletokenService } from './handletoken.service';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class InterceptorInterceptor implements HttpInterceptor {

//   constructor(
//     private tokenService: HandletokenService,
//     private routes: Router) {}

//   private handleAuthError(err: any) {
//     console.log("Invalid token")
//     if(err.status === 401) {
//       this.tokenService.clearToken()
//     }
//     this.routes.navigateByUrl('login')
//     console.log("ajajaja")
//   }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const idToken: string | null = this.tokenService.getToken()
//     console.log(request.method)
//     if (idToken) {
//       const cloned = request.clone({
//           headers: request.headers.set("Authorization",
//               "Bearer " + idToken)
//       })

//       return next.handle(cloned).pipe(tap({
//         next: (event) => {
//           if (event instanceof HttpResponse) {console.log("Valid token");
//           }
//         },
//         error: () => {this.handleAuthError(cloned)}
//       })
//       )
//     }
//     else {
//       return next.handle(request)
//     }
//   }
// }
