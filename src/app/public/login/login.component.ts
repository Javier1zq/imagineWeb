import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

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
      result =>{
        console.log('success');
        console.log(result);
        
      },
      error =>{
        
        console.log('Your credentials are incorrect. Please try again');
        console.log('error 401 -> 400 due to league/oauth2-server');
        console.log(error);
      },
    );
  }
}
