import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
  //title = 'imagineWeb';
  loggedIn = false;
  ngOnInit(){
    this.loggedIn = localStorage.getItem('token') !== null;
  }
  logOut(){
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'))
  }
}



