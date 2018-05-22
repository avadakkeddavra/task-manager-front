import { RouterModule, Routes } from '@angular/router';
import {ManagementComponent} from "./management.component";
import {ProjectPageComponent} from "./project-page/project-page.component";



const ManagementRoutes: Routes = [
  { path: '', component: ManagementComponent,children:[
      { path: 'project/:id', component: ProjectPageComponent}
  ]},

];




export const ManagementRouting = RouterModule.forChild(ManagementRoutes);
