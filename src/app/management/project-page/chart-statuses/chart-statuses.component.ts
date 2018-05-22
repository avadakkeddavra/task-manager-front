import {Component, Input, OnInit} from '@angular/core';
import {AmChart, AmChartsService} from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-chart-statuses',
  templateUrl: './chart-statuses.component.html',
  styleUrls: ['./chart-statuses.component.css']
})
export class ChartStatusesComponent implements OnInit {


  @Input()
    set  dataProvider(data){
      if(data.length != 0)
      {
        this.initChart(data);
      }
    }

  private chart:AmChart;

  constructor(public amChart:AmChartsService) {

  }

  private initChart(data) {
    this.chart = this.amChart.makeChart("chart-statuses",{
      "type": "pie",
      "theme": "dark",
      "dataProvider": data,
      "valueField": "value",
      "labelRadius": 5,
      "radius": "42%",
      "innerRadius": "60%",
      "titleField": "title",
      "color":"#fff",
      "colorField":'color',
      "export": {
        "enabled": true
      }
    });
  }

  ngOnInit() {

  }

}
