import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AllStudentsListComponent } from './components/all-students-list/all-students-list.component';

@NgModule({
  declarations: [StudentDetailsComponent, AllStudentsListComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    CoreModule
  ]
})
export class StudentModule { }
