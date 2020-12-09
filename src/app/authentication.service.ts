import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';
import { Router } from '@angular/router';



const baseUrl = 'http://localhost:3001'

@Injectable()
export class AuthenticationService {
private loggedIn = new BehaviorSubject<boolean>(false);
private token: string;

get isLoggedIn(){
  return this.loggedIn.asObservable();
}

  constructor(private router: Router, private server: ServerService) {
    const userData = localStorage.getItem('user');
    if(userData){
      console.log('Logged in from memory');
      const user = JSON.parse(userData);
      this.token = user.token;
      this.server.setLoggedIn(true, this.token);
      localStorage.setItem('jwt', this.token);
      this.loggedIn.next(true);
    }
  }


  login(user){
    if(user.email !== '' && user.password !== ''){
      return this.server.request('POST', '/user/login', {
        email: user.email,
        password: user.password
      }).subscribe((response: any) => {
        if (response.success === true && response.token !== undefined){
          this.token = response.token;
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
          const userData = {
            token: this.token,
          };
          console.log(userData);
          localStorage.setItem('jwt', JSON.stringify(userData));
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }

  logout(){
    this.server.setLoggedIn(false);
    delete this.token;

    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/']);
  }
}