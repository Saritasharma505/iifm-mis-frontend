import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule } from '@angular/router';
import { PhotoIndexComponent } from './photo-index/photo-index.component';
import { PhotoAddComponent } from './photo-add/photo-add.component';



const routes: Routes = [
    {
      path: '',
      component: PhotoIndexComponent,
      data: {
        title: 'Photo Album Management'
      },
    
    }
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PhotoRoutingModule { }
