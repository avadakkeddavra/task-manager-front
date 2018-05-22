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

  getProject(id)
  {
    return this.http.get('http://localhost:4200/api/project/'+id).map(response => {return response});
  }


  getProjectStages(id)
  {
    return this.http.get('http://localhost:4200/api/project/stages/'+id).map(response => {return response});
  }

  getAllStages()
  {
    return this.http.get('http://localhost:4200/api/project/stages').map(response => {return response});
  }

  getChartData(id,type)
  {
    return this.http.get('http://localhost:4200/api/project/chart/'+id+'?type='+type).map(response => {return response});
  }

  getStat(id)
  {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    let from = new Date();

    if(from.getMonth() > 0 && from.getMonth() < 10)
    {
      var month:string = '0'+from.getMonth();
    }else{
      let month = from.getMonth();
    }


    let date = from.getFullYear()+'-'+month+'-01';

    let data = {
      from:date
    };

    return this.http.post('http://localhost:4200/api/project/stat/'+id,JSON.stringify(data),httpOptions);
  }

}
