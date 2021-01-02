import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ReactiveFormsModule,FormsModule,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean=false;
  email1:string;
  password1:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logIn(){

    if(this.email1==null||this.password1==null)
    {
       alert("Please fill out mandatory fields")
    }

    else if(this.email1!="admin@persistent.com"||this.password1!="admin123"){
      alert("Incorrect email or password")    
    }


    else{
      this.router.navigateByUrl('/create')
    }

  }

  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
})

get email(){return this.loginForm.get('email')}

get password(){return this.loginForm.get('password')}


}