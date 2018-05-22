import {MaterializeModule} from "angular2-materialize";
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { HttpClientModule} from "@angular/common/http";
import { TasksComponent } from './tasks/tasks.component';
import {FormsModule} from "@angular/forms";
import {AmChartsModule} from "@amcharts/amcharts3-angular";
import {ChartsModule} from "ng2-charts";
import {TrackerComponent} from "./tracker.component";
import {CommonModule} from "@angular/common";
import {MenuComponent} from "./menu/menu.component";
import {ProjectsComponent} from "./projects/projects.component";
import {TaskSingleComponent} from "./task-single/task-single.component";
import {CreateTaskComponent} from "./tasks/create-task/create-task.component";
import {PaginationComponent} from "./tasks/pagination/pagination.component";
import {SettingsComponent} from "./tasks/settings/settings.component";
import {TrackerRouter} from "./tracker.routes";
import {TaskComponent} from "./tasks/task/task.component";
import {ProjectsService} from "./../projects.service";
import {TasksService} from "./../tasks.service";



@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MaterializeModule,
    RouterModule,
    Angular2FontawesomeModule,
    AmChartsModule,
    ChartsModule,
    TrackerRouter
  ],
  declarations: [
    TrackerComponent,
    MenuComponent,
    ProjectsComponent,
    TaskSingleComponent,
    TasksComponent,
    CreateTaskComponent,
    SettingsComponent,
    TaskComponent,
    PaginationComponent

  ],
  providers: [
    ProjectsService,
    TasksService
  ],
  bootstrap:[TrackerComponent]
})
export class TrackerModule { }
