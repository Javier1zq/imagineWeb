import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  user: any;
  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
      //'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiN2VmOWUyNDMwOTQ2ODBmMTI3YzY5MDNkMDc0YWZlYmFjYTMzMjA5MDEyMWQ5YjBhYjljYzQwMTBmMjgzZmQxMDZkYmMyNjIwMTFhZWI3ODUiLCJpYXQiOjE2MDU3ODIxMzAsIm5iZiI6MTYwNTc4MjEzMCwiZXhwIjoxNjM3MzE4MTMwLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.aPMGINWg0vtcq1TP9DNyxW7gDZ5lNnqueicfraNyQOO62Fet78Z10zu1JvFZOoPlWPFdz_7vTXa780r9166d1iiuMgetUt9MgLUUb8R3d_Y8CSOLfSqhfAa_bUrQwU2BkNH8eDpzAeAl2PRlpIEygMzcd4X_UOsFkzaJPWn9ino_FAgjTbA-gR4bFfV2u5WPPHLuMWrhzVgQFoBH4c1ffPowEPfTa6HwThH5myxXwrq1eO6ajnqmTbWXDWTk-QyDCbV26U1hUywhfJIj5TuOWQILM6N17IsrvrwDCOwWrVjdX_VGTTo2T7ezswGDHQ3z6crcTpCrRnHPY58qEaY_TLxbYH1j0TkAMKjmZiP8fWZV-6eejddRPcI3blrBAmPaUucnKztAFCsbJnp-6f70D1KxKwwDywOUDdHABPO-vm54YeOlTFWz0dAz4wdEIAfDpVo4Bv1tJUr-TX_2MUMMyLTxJQBhr3mBBvKFS6nItRrHkAMYViWS3WxVjaQyXp5fzWsMjjoaMLIyvEW1JvFUkaG_IZjUCgvEsW66F1gAWaxzlg8pa_ltYmrlt3SWod_5BrAlFHfppLeP7kFUYUpxeXhCunqwZMSTnMVFc4zBvKjkTn7wmXEMjOyZnI7JemZO1gFs1lNflsZqMuULLcHPcV9TjgqkkPgnw6qYSdyjvl8`

    });

    this.http.get('http://localhost:8000/api/user',{headers: headers}).subscribe(
      result=>this.user=result,
      //result=>console.log(localStorage.getItem('token'))
      err=>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    );
  }

}
