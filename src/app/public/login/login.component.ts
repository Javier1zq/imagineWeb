import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public successfulResponse = false;
  public failedResponse = false;
  public userNotVerified = false;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  submit(){
    const formData = this.form.getRawValue();
    const data ={
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'RauG1epphlwk6gwX0U6ABCRku94Gy05ZiYDyvvQy',
      scope: '*'
    };



    this.http.post('http://localhost:8000/api/userIsVerified', formData).subscribe(
      (result) =>{
        //console.log(result);
        if (result==1) {
          this.http.post('http://localhost:8000/oauth/token', data).subscribe(
            (result: any) =>{
              /*console.log('success');
              console.log(result);*/
              localStorage.setItem('token', result.access_token)
              //console.log(result.access_token);
              this.successfulResponse = true;
              this.failedResponse = false;
              this.authService.login();
              this.router.navigate(['/profile']);
            },
            error =>{
              console.log('Your credentials are incorrect. Please try again');
              console.log('error 401 -> 400 due to league/oauth2-server');
              console.log(error);
              this.successfulResponse = false;
              this.failedResponse = true;
            },
          );
        }
        else if (result==0) {
          console.log('User not verified');
          this.userNotVerified =true;
        }
        else{
          this.failedResponse = true;
        }
      },
      error =>{
        console.log(error);
      }
    )
  }
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
