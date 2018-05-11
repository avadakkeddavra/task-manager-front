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


}
