import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto, LoginRequestDto } from '../dto/login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data: LoginRequestDto): Observable<LoginDto> {
    const value = this.http.post<LoginDto>('http://localhost:3000/auth/login', data)
    return value
  }
       
}
