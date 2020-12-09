import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addbudget',
  templateUrl: './addbudget.component.html',
  styleUrls: ['./addbudget.component.scss']
})
export class AddbudgetComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getChartData().subscribe((data) => {
      console.log(data);
    });
  }

}
