import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  

  constructor(private router: Router) { 
    this.form = new FormGroup(
      {
        email: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)])
      }
    )
  }

  ngOnInit(): void {
  }

  save(){
    this.router.navigate(['questions']);
  }

}
