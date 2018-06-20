import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-on-duty-add',
  templateUrl: './on-duty-add.component.html',
  styleUrls: ['./on-duty-add.component.scss']
})
export class OnDutyAddComponent implements OnInit {

  constructor(private _http: Http) { }

  onSubmit(form: NgForm){
  	console.log(form.value);
  }
  ngOnInit() {
  }

}
