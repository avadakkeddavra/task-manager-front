import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() stages;
  @Input() projects;
  @Output() filters = new EventEmitter();
  @Output() reset = new EventEmitter();

  showfilters:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  resetAction(form) {
    form.reset();
    this.reset.emit('reset');
  }

  toggleFilters()
  {
    this.showfilters = !this.showfilters;
  }
  applyFilters(event,form)
  {

    event.preventDefault();
    let data:object = {};
    for(let i in form.elements)
    {
      let item = form.elements[i];
      if((item.localName == 'input' || item.localName == 'select') && item.className != 'select-dropdown')
      {
        if(item.value != '' && item.value != '*')
        {
          data[item.name]=item.value;

        }

      }
    }

    this.filters.emit(data);

  }
}
