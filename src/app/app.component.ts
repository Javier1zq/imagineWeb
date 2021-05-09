import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private wowService: NgwWowService, private translate: TranslateService) {
    this.wowService.init();
  // the lang to use, if the lang isn't available, it will use the current loader to get them
  translate.setDefaultLang('en');
  // for default language to be english, you need to use below code
  //translate.use('en');
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



