import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {TasksComponent} from "./tasks/tasks.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {TaskSingleComponent} from "./task-single/task-single.component";


const AppRoutes: Routes = [
  { path: '', component: ProjectsComponent},
  { path: 'tasks', component: TasksComponent },
  { path: 'task/:id',component:TaskSingleComponent}

];

const Auth: Routes = [
  {path:'',children:AppRoutes, canActivate:[AuthGuard]},
  { path: 'login',component: LoginComponent }
];



export const AppRouter = RouterModule.forRoot(Auth);
