import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Routing Module
import { UserProfileRoutingModule } from './user-profile-routing.module';
//components
import { UserProfileComponent } from './user-profile.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ],
  declarations: [
      UserProfileComponent,
      UserAddComponent
  ]
})
export class UserProfileModule { }
