import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor() { }

  loggedIn = false;
  ngOnInit(){
    this.loggedIn = localStorage.getItem('token') !== null;


  }
  logOut(){
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'))
  }

}
