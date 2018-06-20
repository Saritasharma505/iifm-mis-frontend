import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import {Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';



const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    data: {
      title: 'User Profile Management'
    }
  },
  {
    path: 'user-profile/add',
    component: UserAddComponent,
    data: {
      title: 'ADD User Profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class UserProfileRoutingModule { }
