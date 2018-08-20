import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_address: string;
  showMessage: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  loginUser() {
    alert("You clicked on me");
    this.showMessage = true;
  }

}
