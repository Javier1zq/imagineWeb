import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  public successfulResponse = false;
  public failedResponse = false;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      DNI:['',Validators.required, Validators.minLength(9), Validators.maxLength(9)],
      password:['',Validators.required],
      password_confirmation:['',Validators.required]
    });
  }
  submit(){
    const formData = this.form.getRawValue();
    this.http.post('http://localhost:8000/api/register', formData).subscribe(
      (result) =>{
        console.log(result);
        this.successfulResponse = true;
        this.failedResponse = false;
      },
      error =>{
        console.log(error);
        console.log('error');
        this.successfulResponse = false;
        this.failedResponse = true;
      }
    )
  };
}
