import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import {ProjectPageComponent} from "./project-page/project-page.component";
import {AmChartsModule} from "@amcharts/amcharts3-angular";
import {ChartsModule} from "ng2-charts";
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {RouterModule} from "@angular/router";
import {ManagementRouting} from "./managment.routes";
import {ChartStagesComponent} from "./project-page/chart-stages/chart-stages.component";
import {ChartStatusesComponent} from "./project-page/chart-statuses/chart-statuses.component";
import {ChartUserComponent} from "./project-page/chart-user/chart-user.component";
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { StatisticComponent } from './project-page/statistic/statistic.component';

@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule,
    AmChartsModule,
    ChartsModule,
    RouterModule,
    ManagementRouting
  ],
  declarations: [
    ManagementComponent,
    ProjectPageComponent,
    ChartStagesComponent,
    ChartStatusesComponent,
    ChartUserComponent,
    NavMenuComponent,
    StatisticComponent
  ],
  bootstrap:[ManagementComponent]
})
export class ManagementModule { }
