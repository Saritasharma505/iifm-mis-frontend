import { Component, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserDetails } from './user_details';
import { Http } from '@angular/http';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(private userService: UserService,
              private http: Http) {
  }
  user_details:any;
  ngOnInit() {
    this.getAllUsers();
  }

getAllUsers(){
   this.userService.showAllUser().subscribe(UserDetails =>{
      this.user_details= UserDetails;
      console.log(this.user_details);
   });
}
  

}
