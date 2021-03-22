import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      email:'',
      password:''
    });
  }
  submit(){
    const formData = this.form.getRawValue();
    const data ={
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'dRj50MW592uOOqa5kVZLUPusnt8quCukz5zGNEno',
      scope: '*'
    };

    this.http.post('http://localhost:8000/oauth/token', data).subscribe(
      (result: any) =>{
        /*console.log('success');
        console.log(result);*/
        localStorage.setItem('token', result.access_token)
        console.log(result.access_token);
        this.successfulResponse = true;
        this.failedResponse = false;

        this.authService.login();



        this.router.navigate(['/secure']);
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
}
