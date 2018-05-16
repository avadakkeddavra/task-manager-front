import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";
import {ProjectsService} from "../projects.service";

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

      this.tasks = response.tasks;
      let count:any = Math.ceil(response.count/10);

      for(let i = 0; i < count ;i++){
        this.paginationPages.push({
          number:i+1,
          link:'/tasks?page='+(i+1)
        });
      }

    });

  }

  filtersAction(filters)
  {
      console.log(filters);
  }

  addTask(task)
  {
      this.TasksService.createTask(task).subscribe(response => {
        this.tasks.unshift(response);
      });

  }
  onChanged(page)
  {
    this.TasksService.getAllTasks(page).subscribe(response => {
      let responseData:any = response;
      this.tasks = responseData.tasks;
    })
  }

}
