import { RouterModule, Routes } from '@angular/router';

import {ProjectsComponent} from "./projects/projects.component";
import {TasksComponent} from "./tasks/tasks.component";
import {TaskSingleComponent} from "./task-single/task-single.component";
import {TrackerComponent} from "./tracker.component";



const TrackerRoutes: Routes = [
  { path: '', component: TrackerComponent, children: [
      { path: '', component: ProjectsComponent},
      { path: 'tasks', component: TasksComponent },
      { path: 'task/:id',component:TaskSingleComponent},
   ]},

];




export const TrackerRouter = RouterModule.forChild(TrackerRoutes);
