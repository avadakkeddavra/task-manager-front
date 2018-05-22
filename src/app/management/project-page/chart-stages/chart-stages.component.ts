import {Component, Input, OnInit} from '@angular/core';
import {AmChart, AmChartsService} from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-chart-stages',
  templateUrl: './chart-stages.component.html',
  styleUrls: ['./chart-stages.component.css']
})
export class ChartStagesComponent implements OnInit {

  @Input()
  set dataProvider(data) {
    if(data != undefined)
    {
      this.initChart(data);
    }
  }

  private chart: AmChart;

  constructor(public amChart: AmChartsService) {

  }

  private initChart(data) {
    this.chart = this.amChart.makeChart("chart-stages",{
      "type": "pie",
      "theme": "dark",
      "dataProvider": data,
      "valueField": "value",
      "labelRadius": 5,
      "radius": "42%",
      "innerRadius": "50%",
      "titleField": "title",
      "color":"#fff",
      "export": {
        "enabled": true
      }
    });
  }

  ngOnInit() {


  }
}
