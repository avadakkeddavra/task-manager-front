import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./auth.guard";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [

      { path: 'management', loadChildren: './management/management.module#ManagementModule' },
      { path: '',loadChildren: './tracker/tracker.module#TrackerModule'},

];


const Auth: Routes = [
  {path:'',children:routes, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(Auth)],
  exports: [RouterModule],
})
export class AppRouting {}

