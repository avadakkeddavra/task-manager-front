import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from "./../../../tasks.service";
import {toast} from "angular2-materialize";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task:any;
  changeStatus:boolean = false;
  showAddHours:boolean = false;

  constructor(private taskService:TasksService) { }

  ngOnInit() {
  }

  showAddHoursAction()
  {
    this.showAddHours = !this.showAddHours;
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
      toast('Estimate successfully updated',1000);
      delete this.task;
    })
  }

  changeEsimate(estimate)
  {
    this.taskService.update(this.task.id,'estimated',estimate).subscribe(response => {
      let responseData:any = response;
      if(responseData.success == true){
        toast('Estimate successfully updated',1000);
      }
    });

  }
  changeSpent(spent)
  {
    this.taskService.update(this.task.id,'spent',spent.value).subscribe(response => {
      let responseData:any = response;
      if(responseData.success == true){
        this.task.spent = responseData.item.spent;
        toast('Spent successfully updated',1000);
        spent.value = '';
      }
    });
  }

  changeTasksStatus(status_type:number)
  {
    if(this.task.status != status_type)
    {
      this.taskService.update(this.task.id,'status',status_type).subscribe(response => {
        let responseData:any = response;
        if(responseData.success == true){
          this.task.status = status_type;
          this.changeStatus = !this.changeStatus;
          toast('Spent successfully updated',2000);
        }
      });

    }

  }
}
