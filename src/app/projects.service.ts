import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects()
  {
    return this.http.get('http://localhost:4200/api/projects').map(response => {return response});
  }

  getProjectStages(id)
  {
    return this.http.get('http://localhost:4200/api/project/stages/'+id).map(response => {return response});
  }

  getAllStages()
  {
    return this.http.get('http://localhost:4200/api/project/stages').map(response => {return response});
  }
}
