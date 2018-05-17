import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Md5} from "ts-md5";
import {headersToString} from "selenium-webdriver/http";

@Injectable()
export class TasksService {

  constructor(private auth: AuthService,private http:HttpClient) { }

  getAllTasks(page = null,filters = null)
  {
    let user = this.auth.getCurrentUser();


    if(filters != null)
    {
      var query = '';

      for(let i in filters){
        query+='&'+i+'='+filters[i];
      }

      console.log(filters);
    }else{
      var query = '';
    }

    if(page != null)
    {
      var url ='http://localhost:4200/api/user/'+user+'?page='+page+query;
    }else{
      var url ='http://localhost:4200/api/user/'+user;
    }


    return this.http.get(url).map(response => {return response});
  }
  getTaskManage(id)
  {
    return this.http.get('http://localhost:4200/api/task/'+id).map(response => {
      return response
    });
  }

  deleteTask(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post('http://localhost:4200/api/delete/'+id,{'user_id':this.auth.getCurrentUser()},httpOptions);
  }

  deleteManage(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:4200/api/deletemanage/'+id,JSON.stringify({'user_id':this.auth.getCurrentUser()}),httpOptions);
  }

  createTask(data)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    console.log(data);
    
    return this.http.post('http://localhost:4200/api/create',JSON.stringify(data),httpOptions);
  }

  update(id,column,value)
  {
    let data = {
      col:column,
      val:value,
      id:id,
      user_id:this.auth.getCurrentUser()
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post('http://localhost:4200/api/update/'+id,JSON.stringify(data),httpOptions);

  }
  updateManage(id,column,value)
  {
    let data = {
      col:column,
      val:value,
      id:id,
      user_id:this.auth.getCurrentUser()
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post('http://localhost:4200/api/updatemanage/'+id,JSON.stringify(data),httpOptions);
  }

}
