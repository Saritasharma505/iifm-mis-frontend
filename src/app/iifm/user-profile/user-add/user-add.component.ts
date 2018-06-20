import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetails } from '../user_details';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(private _http: Http,
              private userService:UserService){}
        private headers = new Headers({'Content-Type': 'application/json'});
  
  model = new UserDetails();

  addProfile(){
    this.userService.addProfile(this.model).subscribe(response => {
      console.log(response);
    })
  }

  	onSubmit(form: NgForm): Promise <UserDetails>{
        return this._http.post('http://127.0.0.1:8000/api/admin/add-user-details', JSON.stringify(form.value), {headers: this.headers})
  		   .toPromise()
    	           .then(res => res.json().data)
                  .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }

  ngOnInit() {
  }

}
