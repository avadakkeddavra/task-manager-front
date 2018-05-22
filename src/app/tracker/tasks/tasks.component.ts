import { Component, OnInit } from '@angular/core';
import {TasksService} from "./../../tasks.service";
import {ProjectsService} from "./../../projects.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService,ProjectsService]
})
export class TasksComponent implements OnInit {


  tasks:Array<any> = [];
  paginationPages:Array<any> = [];
  projects:any;
  stages:any;
  filters:any = {};

  constructor(private TasksService:TasksService,
              private projectService:ProjectsService) { }

  ngOnInit() {


    this.projectService.getAllStages().subscribe(response =>{
      this.stages = response;
    });


    this.projectService.getProjects().subscribe(response =>{
      this.projects = response;
    });

    this.TasksService.getAllTasks().subscribe(tasks => {
      let response:any = tasks;
      this.rebuildComponent(response);
    });

  }

  resetAction(type)
  {
    this.filters = {};
    this.TasksService.getAllTasks().subscribe(tasks => {
      let response:any = tasks;
      this.rebuildComponent(response);
    });
  }

  private rebuildComponent(response)
  {

    this.tasks = response.tasks;
    let count:any = Math.ceil(response.count/10);
    this.paginationPages = [];
    for(let i = 0; i < count ;i++){
      this.paginationPages.push({
        number:i+1,
        link:'/tasks?page='+(i+1)
      });
    }

  }

  filtersAction(filters)
  {
    this.filters = filters;
    this.TasksService.getAllTasks(1,filters).subscribe(tasks => {
      let response:any = tasks;
      this.rebuildComponent(response);
    })
  }

  addTask(task)
  {
      this.TasksService.createTask(task).subscribe(response => {
        this.tasks.unshift(response);
      });

  }
  onChanged(page)
  {
    this.TasksService.getAllTasks(page,this.filters).subscribe(tasks => {
      let response:any = tasks;
      this.rebuildComponent(response);
    })
  }

}
