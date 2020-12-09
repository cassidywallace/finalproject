import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  constructor(public AuthenticationService: AuthenticationService){}

onLogout(){
  this.AuthenticationService.logout();
}
}
