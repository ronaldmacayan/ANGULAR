import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [

  
  {
    path: '',
    component:LayoutComponent,
  },
   {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'students',
    component:StudentsComponent
  },
  {
    path:'teachers',
    component:TeachersComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
