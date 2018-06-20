import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule } from '@angular/router';
import { LeaveIndexComponent } from './leave-index/leave-index.component';




const routes: Routes = [
    {
      path: '',
      component: LeaveIndexComponent,
      data: {
        title: 'Leave Management'
      },
    
    }
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LeaveRoutingModule { }
