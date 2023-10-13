import { NgModule } from '@angular/core';
import { StudentsComponent } from './students.component';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';



@NgModule({
  declarations: [
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
  ]
})
export class StudentsModule { }
