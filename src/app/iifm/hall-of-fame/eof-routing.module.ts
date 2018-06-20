import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule } from '@angular/router';
import { EofIndexComponent } from './eof-index/eof-index.component';
import { EofAddComponent } from './eof-add/eof-add.component';



const routes: Routes = [
    {
      path: '',
      component: EofIndexComponent,
      data: {
        title: 'Hall of Fame Management'
      },
      children: [
        {
          path: 'user/employee-of-month',
          component: EofAddComponent,
          data: {
            title: 'Add Employee Of Month'
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
export class EofRoutingModule { }
