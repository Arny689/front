import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupRequestDto, LoginRequestDto, LoginDto } from '../dto/auth.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data: LoginRequestDto): Observable<LoginDto> {
    return this.http.post<LoginDto>('http://localhost:8080/login', data);
  }

  signup(data: SignupRequestDto): Observable<LoginDto> {
    return this.http.post<LoginDto>('http://localhost:8080/signup', data);
  }
       
}
