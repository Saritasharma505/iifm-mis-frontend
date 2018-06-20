import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule } from '@angular/router';
import { OnDutyIndexComponent } from './on-duty-index/on-duty-index.component';
import { OnDutyAddComponent } from './on-duty-add/on-duty-add.component';


const routes: Routes = [
    {
      path: '',
      component: OnDutyIndexComponent,
      data: {
        title: 'On-Duty Management'
      },
    
    },
    {
      path: 'user/on-duty-request/add',
      component: OnDutyAddComponent,
      data: {
        title: 'ADD On-Duty'
      },
    
    }
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class OnDutyRoutingModule { }
