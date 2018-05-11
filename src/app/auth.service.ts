import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Md5} from "ts-md5";



@Injectable()
export class AuthService {

  user:number;
  constructor(private http: HttpClient) { }


  login(data)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    let sendData = "login="+data.login+"&password="+Md5.hashStr(data.password);
    console.log(sendData);
    return this.http.post('http://localhost:4200/api/login',sendData,httpOptions);
  }

  setCurrentUser(user)
  {
    this.user = user;
  }

  getCurrentUser()
  {
    return Number(localStorage.getItem('user_token'));
  }
}
