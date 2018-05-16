import {Component, OnInit} from '@angular/core';
import {TasksService} from "../tasks.service";
import {ActivatedRoute} from "@angular/router";
import {AmChartsService, AmChart} from "@amcharts/amcharts3-angular";
import {toast} from "angular2-materialize";
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-task-single',
  templateUrl: './task-single.component.html',
  styleUrls: ['./task-single.component.css'],
  providers:[TasksService,ProjectsService]
})

export class TaskSingleComponent implements OnInit
{
  task:any;
  dataProvider:Array<any>;
  stages:any = [];
  showStages:boolean = false;

  private chart: AmChart;

  constructor(private single: TasksService,
              private activatedRoute: ActivatedRoute,
              private amChart: AmChartsService,
              private projectsService: ProjectsService
  ) { }

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

        this.projectsService.getProjectStages(this.task.project.id).subscribe(response => {
            this.stages = response;
        });
        let chartData = [];
        for(let i in  this.task.tasks_manages)
        {
          let item = this.task.tasks_manages[i];

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

  toggleStages()
  {
    this.showStages = !this.showStages;
  }

  deleteManage(id)
  {
    this.single.deleteManage(id).subscribe(response => {
      let responseData:any = response;

      if(responseData.success == true)
      {
        this.task = responseData.item;
        toast('Spent successfully updated',1000);
      }

    })
  }

  changeStage(id,value)
  {
    this.single.update(id,'stage_id',value).subscribe(response => {
      let responseData:any = response;
      if(responseData.success == true){
        this.task = responseData.item;
        this.showStages = !this.showStages;
        toast('Date manage successfully updated',1000);
      }
    });
    console.log(id,value);
  }
  changeDate(id,value)
  {
    this.single.updateManage(id,'date',value).subscribe(response => {
      let responseData:any = response;
      if(responseData.success == true){
        this.task = responseData.item;
        toast('Date manage successfully updated',1000);
      }
    });
    console.log(id,value);
  }

  changeTime(id,value)
  {
    this.single.updateManage(id,'time',value).subscribe(response => {
      let responseData:any = response;
      if(responseData.success == true){
        this.task = responseData.item;
        toast('Time manage successfully updated',1000);
      }
    });
    console.log(id,value);
  }

}
// class Task {
//     name:string;
//     id:number;
//     user_id:number;
//     project_id:number;
//     stage_id:number;
//     created_at:string;
//     updated_at:string;
//     project:any;
//     project_stage:any;
//     tasks_manages:any;
//     spent:number;
//     status:number;
//     estimated:number;
//     task_id:number;
//     type:number;
// }
// class Manage{
//   id:number;
//   task_id:number;
//   user_id:number;
//   time:number;
//   date:string;
//   updated_at:string;
//   created_at:string;
// }
