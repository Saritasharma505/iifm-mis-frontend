import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: Headers = new Headers;
  option : any;
  server = 'http://127.0.0.1:8000/api/';

  constructor(private http:Http, private router:Router)
         {
            this.headers.append('enctype','multipart/form-data');
            this.headers.append('Content-Type','application/json');
            this.headers.append('X-Requested-With','XMLHttpRequest');
          
            this.option = new RequestOptions({headers: this.headers});
         }

         addProfile(info){
            var data = JSON.stringify(info);
            return this.http.post(this.server+"add-user-details",data,this.option).map(res=>res.json());
         }
 
  showAllUser(){
    return  this.http.get("http://127.0.0.1:8000/api/admin/all-users").map(res=> res.json());
  }
}
