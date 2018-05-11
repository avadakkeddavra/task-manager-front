import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticate: AuthService,private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('user_token') != null)
    {
      this.router.navigate(['/']);
    }
  }

  auth(login,password)
  {

    let data = {
      login:login,
      password:password
    };

    this.authenticate.login(data).subscribe(user => {

        let response:any = user;
        localStorage.setItem('user_token',response.token);
        this.authenticate.setCurrentUser(response.token);
        this.router.navigate(['/']);

    });

  }
}
