import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:boolean = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(formData){
    
    if(formData.value){
      if(formData.value.user== environment.userName && formData.value.password == environment.password){
        this.router.navigate(['db']);
      }
      else{
        this.login = true;
      }
     }

   }

}
