import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { ExpenseService } from '../expense.service';



@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  constructor(private ExpenseService: ExpenseService) { }


  private svg;
  private margin = 300;
  private width = 1200 - (this.margin * 2);
  private height = 1000 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.title))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    var budget = Array()
    for(var i=0; i<data.length; i++)
    {
      budget[i] = data[i].budget
    }
    const y = d3.scaleLinear()
    .domain([0, Math.max(...budget)])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.title))
    .attr("y", d => y(d.budget))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.budget))
    .attr("fill", "#d04a35");
  }
  ngOnInit(): void {
    this.createSvg();
    this.ExpenseService.getChartData().subscribe((data) => {
      //console.log(data);
      this.drawBars(data);
});
}

}
