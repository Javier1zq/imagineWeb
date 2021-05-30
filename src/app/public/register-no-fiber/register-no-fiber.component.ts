import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ibanValidator } from "ngx-iban";
@Component({
  selector: 'app-register-no-fiber',
  templateUrl: './register-no-fiber.component.html',
  styleUrls: ['./register-no-fiber.component.scss']
})
export class RegisterNoFiberComponent implements OnInit {

  form: FormGroup;
  public successfulResponse = false;
  public failedResponse = false;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) { }


  ngOnInit(): void {
    this.form= this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      DNI:['',[Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation:['',[Validators.required]],
      dataPlan:['0',[Validators.required]],
      fiberPlan:['0',[Validators.required]],
      tvPlan:[''],
      iban:['',[Validators.required, ibanValidator("NL")]],
    }, {})
  }
  submit(){
    const formData = this.form.getRawValue();
    console.log(formData);
    this.http.post('http://46.25.181.72:8000/api/register', formData).subscribe(
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
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get first_name() {
    return this.form.get('first_name');
  }
  get last_name() {
    return this.form.get('last_name');
  }
  get password_confirmation() {
    return this.form.get('password_confirmation');
  }
  get DNI() {
    return this.form.get('DNI');
  }
  get iban() {
    return this.form.get('iban');
  }

}
