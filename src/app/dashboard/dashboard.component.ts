import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  email: string;

  constructor(private server: ServerService) { }


  ngOnInit() {
    this.server.request('GET', '/budget').subscribe((user: any) => {
      if(user){
        console.log(this.email);
        this.email = user.email;
      }
    });
  }

}
