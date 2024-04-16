// import { Injectable } from '@angular/core';
// import { AuthenticationService } from './authentication.service';
// import { firstValueFrom } from 'rxjs';
// import { LoginDto } from '../dto/login.dto';

// @Injectable({
//   providedIn: 'root'
// })
// export class HandletokenService {

//   private readonly TOKEN_KEY = "tokenID"

//   constructor(private authService: AuthenticationService) { }

//   async authorize(email: string, password: any): Promise<boolean> {
//     try {
//       const data = {
//         email,
//         password
//       }

//       const value: LoginDto = await firstValueFrom(this.authService.login(data))
//       const token = value.token
//       if (token == null) return false;
//       localStorage.setItem(this.TOKEN_KEY, token) 
//       return true

//     } catch(error) {
//       console.log(error)
//       return false  
//     }
//   }
  
   
//   getToken() {
//     return localStorage.getItem(this.TOKEN_KEY)
//   } 

//   clearToken() {
//     localStorage.clear()
//   }
// }
