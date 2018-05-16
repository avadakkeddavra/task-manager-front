import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() stages;
  @Input() projects;
  @Output() filters = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  applyFilters(event,form)
  {

    event.preventDefault();
    let data:Array<any> = [];
    for(let i in form.elements)
    {
      let item = form.elements[i];
      if((item.localName == 'input' || item.localName == 'select') && item.className != 'select-dropdown')
      {
        if(item.value != '' && item.value != '*')
        {
          let itemObj:object = {};
          itemObj[item.name]=item.value;
          data.push(itemObj);
        }

      }
    }

    this.filters.emit(data);

  }
}
