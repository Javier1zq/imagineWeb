import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})
export class CoverageComponent implements OnInit {

  form: FormGroup;
  public successfulResponse = false;
  public failedResponse = false;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      street:'',
      number:'',
      town:''
    });
  }


  submit(){
    const formData = this.form.getRawValue();
    console.log(this.form.getRawValue());
    const data ={
      street: formData.street,
      number: formData.number,
      town: formData.town

    };

    this.http.post('http://localhost:8000/api/checkCoverageApi', data, {responseType: 'text'}).subscribe(
      (result: any) =>{
        console.log('success');
        console.log(result);
        if (result=="found") {
          this.successfulResponse = true;
          this.failedResponse = false;
        } else {
          this.successfulResponse = false;
          this.failedResponse = true;
        }

        /*localStorage.setItem('token', result.access_token)
        this.router.navigate(['/secure']);
        console.log(result.access_token);*/

      },
      error =>{
        console.log(error);
        console.log('error');

      },
    );
  }

}
