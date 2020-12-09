import { Component, OnInit,} from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})

export class PiechartComponent implements OnInit {
  constructor(private dataService: DataService) {}

  createChart(data) {

    var labels = [];
    var _data = [];
    for (var i = 0; i < data.length; i++) {
      labels[i] = data[i].title;
      _data[i] = data[i].budget;
    }

    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: _data,
            backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#58508d',
              '#bc5090',
              '#ff6361',
              '#003f5c',
              '#b4c6f0',
            ],
          },
        ],
      },
    });
  }

  ngOnInit(): void {
    this.dataService.getChartData().subscribe((data: any) => {
      this.createChart(data);
    });
  }
}
