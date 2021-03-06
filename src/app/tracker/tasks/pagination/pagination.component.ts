import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pages;
  @Output() onChanged = new EventEmitter();

  constructor() { }

  async ngOnInit() {

  }

  setActivePage(page)
  {
      this.onChanged.emit(page);
  }

}
