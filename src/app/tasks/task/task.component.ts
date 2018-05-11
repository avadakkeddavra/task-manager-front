import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from "../../tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task:any;
  changeStatus:boolean = false;

  constructor(private taskService:TasksService) { }

  ngOnInit() {
  }

  toggleStatus()
  {
    if(this.changeStatus == false){
      this.changeStatus = true;
    }else{
      this.changeStatus = false;
    }
  }
  deleteTask()
  {
    this.taskService.deleteTask(this.task.id).subscribe(response => {
      console.log(response);
    })
  }

  changeEsimate(estimate)
  {
    console.log(estimate);
  }
  changeSpent(spent)
  {
    console.log(spent);
  }

  changeTasksStatus(status_type:number)
  {
    if(this.task.status != status_type)
    {
      this.task.status = status_type;
    }

  }
}
