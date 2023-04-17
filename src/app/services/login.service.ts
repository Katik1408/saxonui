import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';

// const headers = new HttpHeaders();
// headers.set('Content-Type', 'application/json');

const API_URL = environment.apiURL;
const CREATE_NEW_USER = 'api/signupuser';
const LOGIN_USER = 'api/login';
@Injectable({
  providedIn: 'root'
})


export class LoginService {
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private httpClient: HttpClient) { }

  signupuser(formData: any) {
    console.log(formData);
    return this.httpClient.post<any>(`${API_URL}/${CREATE_NEW_USER}`, formData);
  }
  loginUser(EmailId: string, password: string) {
    return this.httpClient.post<any>(`${API_URL}/${LOGIN_USER}`, { EmailId, password }).pipe(
      map((response: any) => {
        const user = response;
        console.log(user)
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          localStorage.setItem('emailid', this.decodedToken.email)
          console.log(this.decodedToken);
        }
      })
    );;
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
