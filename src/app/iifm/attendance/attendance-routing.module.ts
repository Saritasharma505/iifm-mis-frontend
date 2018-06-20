import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceIndexComponent } from './attendance-index/attendance-index.component';
import { AttendanceAddComponent } from './attendance-add/attendance-add.component';
import {Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    {
      path: '',
      component: AttendanceIndexComponent,
      data: {
        title: 'Attendance Management'
      },
      children: [
        {
          path: 'user/attendance',
          component: AttendanceAddComponent,
          data: {
            title: 'Add Attendance'
          }
        }
        
      ]
    }
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AttendanceRoutingModule { }
