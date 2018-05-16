import {MaterializeModule} from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import {AppRouter} from "./app.routes";
import { MenuComponent } from './menu/menu.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth.guard";
import { TaskSingleComponent } from './task-single/task-single.component';
import {AmChartsModule} from "@amcharts/amcharts3-angular";
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { PaginationComponent } from './tasks/pagination/pagination.component';
import { SettingsComponent } from './tasks/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MenuComponent,
    TasksComponent,
    LoginComponent,
    TaskSingleComponent,
    CreateTaskComponent,
    TaskComponent,
    PaginationComponent,
    SettingsComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    RouterModule,
    AppRouter,
    Angular2FontawesomeModule,
    HttpClientModule,
    FormsModule,
    AmChartsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
