import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectsService} from "./../../projects.service";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  providers:[ProjectsService]
})
export class ProjectPageComponent implements OnInit {

  statusesData:any = [];
  stagesData:any;
  statData:any;
  project:any;


  constructor(
              private ProjectsService:ProjectsService,
              private activatedRoute: ActivatedRoute,
              ) { }

  ngOnInit() {

   this.activatedRoute.params.subscribe((params) => {

      this.ProjectsService.getChartData(params.id,'status').subscribe( response => {
        this.statusesData = response;
      });

     this.ProjectsService.getProject(params.id).subscribe( response => {
       this.project = response;
     })

     this.ProjectsService.getStat(params.id).subscribe( response => {
       this.statData = response;
     });


      this.ProjectsService.getChartData(params.id,'stage').subscribe( response => {
        this.stagesData = response;
      });
    });

  }

}
