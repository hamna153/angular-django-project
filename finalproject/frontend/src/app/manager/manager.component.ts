import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { Chart, ChartType, registerables } from 'chart.js';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  
 
  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [75, 49, 89, 31, 86, 35, 50], label: 'Progress'},
    {data: [48, 38, 65, 39, 66, 17, 80], label: 'deterioration'}
  ];


  public lineChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {data: [75, 49, 89, 31, 85, 35, 50], label: 'Hamna'},
    {data: [48, 38, 66, 39, 66, 17, 80], label: 'Ayesha'},
    {data: [55, 46, 80, 61, 82, 21, 60], label: 'Lekshmi'},
    {data: [65, 59, 48, 62, 55, 26, 40], label: 'Amal'},
    {data: [88, 81, 40, 37, 83, 19, 70], label: 'Anandhu'},
  ];

  ngOnInit(): void {
  }

}
