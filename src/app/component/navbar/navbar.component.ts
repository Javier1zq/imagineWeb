import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authservice.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor(public authService: AuthService, public translate: TranslateService) { }

  loggedIn = false;
  ngOnInit(){
    this.loggedIn = localStorage.getItem('token') !== null;
  }

  logOut(){
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
    this.loggedIn = false;

  }

}
