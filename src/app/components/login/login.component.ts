import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/providers/login.service';
import { User } from 'src/app/models/user';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User;

  constructor(private _loginService:LoginService,
              private formBuilder:FormBuilder,
              private router:Router) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  userForm = this.formBuilder.group({
    user:['',],
    password:['']
  });


  submit(){
    console.log(this.userForm.value);
    let userJson:String=`'email':${this.user.email},'password':${this.user.password}`;
    this._loginService.login(userJson); 
    this.router.navigate(['/home/movies']);

  }

  refresh(){
    this.userForm.patchValue({
      user:"",
      password:""
    });
  }
}
