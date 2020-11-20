import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

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
      client_secret: 'LxrMYKRdQUgGpwQgGDLnMCyHvPOjEzGMqVep1dUH',
      scope: '*'
    };

    this.http.post('http://localhost:8000/oauth/token', data).subscribe(
      (result: any) =>{
        /*console.log('success');
        console.log(result);*/
        localStorage.setItem('token', result.access_token)
        this.router.navigate(['/secure']);
        console.log(result.access_token);

      },
      error =>{

        console.log('Your credentials are incorrect. Please try again');
        console.log('error 401 -> 400 due to league/oauth2-server');
        console.log(error);
      },
    );
  }
}
