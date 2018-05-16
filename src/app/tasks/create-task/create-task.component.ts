import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {ProjectsService} from "../../projects.service";
import {Form} from "@angular/forms";
import {TasksService} from "../../tasks.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers:[ProjectsService]
})
export class CreateTaskComponent implements OnInit {
  @Input() projects;
  @Output() createTaskAction = new EventEmitter();
  formShow = 0;

  task:any = {};

  constructor(private projectService: ProjectsService,
              private taskService:TasksService,
              private auth:AuthService) {}

  ngOnInit() {}

  showForm(){
    if(this.formShow == 0){
      this.formShow = 1;
    }else{
      this.formShow = 0;
    }
  }


  createTask(event:Event, form)
  {
    event.preventDefault();

    for(let i in form.elements){
      let item = form.elements[i];

      if((item.localName == 'input' || item.localName == 'select') && item.className != 'select-dropdown')
      {
        this.task[item.name] = item.value;
      }
    }
    this.task.user_id = this.auth.getCurrentUser();
    this.createTaskAction.emit(this.task);
    form.reset();

  }
}
