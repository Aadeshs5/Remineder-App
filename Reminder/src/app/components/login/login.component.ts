import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UsersService} from '../../services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm;

  constructor(private usersSerivce: UsersService) { }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm()
  {
    
  this.profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl('')
  });

}

userRegister()
{

  this.usersSerivce.userRegister(this.profileForm.value).subscribe(data =>
    {

      console.log("user",data);
    })

}
  
}
