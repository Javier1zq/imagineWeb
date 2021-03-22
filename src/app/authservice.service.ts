import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthService {
  public isLoggedIn$: BehaviorSubject<boolean>;

  constructor() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
  }

  login() {
    // logic
    localStorage.setItem('loggedIn', 'true');
    this.isLoggedIn$.next(true);
  }

  logout() {
    // logic
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('token');
    this.isLoggedIn$.next(false);
  }
}
