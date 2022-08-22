import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;

  constructor( private location: Location,
               private userService: UserService,
               private router: Router) {
    this.user = new User();

  }



  ngOnInit() { }
  emailpattern="[a-z0-9]{1,}[@][a-zA-Z]{2,}[.][a-zA-Z]{2,}";
  namepattern="[a-zA-Z]{3,15}[ ]{1}[a-zA-Z]{2,15}";
  mobilepattern="[0-9]{10}";
  passwordpattern="[a-zA-Z0-9]{5,15}";
  
  onSubmit(){
    this.userService.signUp(this.user).subscribe(u => {
      this.router.navigate(['/login']);
    },
        e => {});
  }



}

