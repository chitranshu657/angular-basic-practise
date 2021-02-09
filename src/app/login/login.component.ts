import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  information:any;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.information="The product is added to the cart";
    return this.information;
  }
}