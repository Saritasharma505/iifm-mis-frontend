import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule } from '@angular/router';
import { ConveyanceIndexComponent } from './conveyance-index/conveyance-index.component';
import { ConveyanceAddComponent } from './conveyance-add/conveyance-add.component';



const routes: Routes = [
    {
      path: '',
      component: ConveyanceIndexComponent,
      data: {
        title: 'Conveyance Management'
      },
     
    }
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ConveyanceRoutingModule { }
