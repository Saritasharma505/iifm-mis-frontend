import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule } from '@angular/router';
import { ReimbursementIndexComponent } from './reimbursement-index/reimbursement-index.component';



const routes: Routes = [
    {
      path: '',
      component: ReimbursementIndexComponent,
      data: {
        title: 'Reimbursement Management'
      },
    
    }
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ReimbursementRoutingModule { }
