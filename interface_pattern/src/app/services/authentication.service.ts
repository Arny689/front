import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupRequestDto, LoginRequestDto } from '../dto/auth.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data: LoginRequestDto): Observable<number> {
    return this.http.post<number>('http://localhost:8080/login', data);
  }

  signup(data: SignupRequestDto): any {
    return this.http.post('http://localhost:8080/signup', data);
  }
       
}
