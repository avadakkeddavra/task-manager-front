import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {


  tasks:Array<any> = [];
  paginationPages:Array<any> = [];

  constructor(private TasksService:TasksService) { }

  ngOnInit() {
    this.TasksService.getAllTasks().subscribe(tasks => {
      let response:any = tasks;

      this.tasks = response.tasks;
      let count:any = Number(response.count/10).toFixed();

      for(let i = 0; i < count ;i++){
        this.paginationPages.push({
          number:i+1,
          link:'/tasks?page='+(i+1)
        });
      }

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
    this.TasksService.getAllTasks(page).subscribe(response => {
      let responseData:any = response;
      this.tasks = responseData.tasks;
    })
  }

}
