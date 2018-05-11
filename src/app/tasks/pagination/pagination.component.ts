import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TasksService} from "../../tasks.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pages;
  @Output() onChanged = new EventEmitter();
  pagination:Array<any>;

  constructor(private tasksService:TasksService) { }

  async ngOnInit() {

  }

  setActivePage(page)
  {
      this.onChanged.emit(page);
  }

}
