import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";
import {ActivatedRoute} from "@angular/router";
import {AmChartsService, AmChart} from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-task-single',
  templateUrl: './task-single.component.html',
  styleUrls: ['./task-single.component.css'],
  providers:[TasksService]
})
export class TaskSingleComponent implements OnInit
{
  task:any = {};
  dataProvider:Array<any>;

  private chart: AmChart;

  constructor(private single: TasksService, private activatedRoute: ActivatedRoute,private amChart: AmChartsService) { }

  private initChart() {
    this.chart = this.amChart.makeChart("chartdiv",{
      "type": "serial",
      "theme": "light",
      "marginRight": 80,
      "autoMarginOffset": 20,
      "marginTop": 7,
      "dataProvider": this.dataProvider,
      "valueAxes": [{
      "axisAlpha": 0.2,
      "dashLength": 1,
      "position": "left"
    }],
      "mouseWheelZoomEnabled": true,
      "graphs": [{
      "id": "g1",
      "balloonText": "[[value]]",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "hideBulletsCount": 50,
      "title": "",
      "valueField": "visits",

      "useLineColorForBulletBorder": true,
      "balloon":{
        "drop":true
      }
    }],
      "chartScrollbar": {
      "autoGridCount": true,
        "graph": "g1",
        "scrollbarHeight": 40
    },
    "chartCursor": {
      "limitToGraph":"g1"
    },
    "categoryField": "date",
      "categoryAxis": {
      "parseDates": true,
        "axisColor": "#DADADA",
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
      "enabled": true
    }
    });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.single.getTaskManage(params.id).subscribe(manages => {
        this.task = manages;
        let chartData = [];
        for(let i in  this.task.tasks_manages)
        {
          let item = this.task.tasks_manages[i];

          let date = this.formatDate(item.date);
          item.date = date;

          chartData.push({
            date: item.date,
            visits: item.time
          });
        }
        this.dataProvider = chartData;
        this.initChart();
      });
    });

  }

  private formatDate(date)
  {
      let thisdate = new Date(date);

      let dd:any = thisdate.getDate();
      if (dd < 10) {
          dd = '0' + dd;
      }

      let mm:any = thisdate.getMonth();
      if (mm < 10) {
        mm = '0' + mm;
      }

      let yy = thisdate.getFullYear();

      return yy+'-'+mm+'-'+dd;
  }


}
