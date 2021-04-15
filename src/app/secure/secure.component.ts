import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { AuthService } from '../authservice.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar' as 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public doughnutChartLabels = [''];
  public doughnutChartData = [0];
  public doughnutChartType = 'doughnut' as 'doughnut';
  public chartColors: any[] = [
    {
      backgroundColor:["#00CF83", "#001B6A", "#FAFFF2", "#FFFCC4", "#B9E8E0"]
    }];


  user: any;
  services: Services[];
  data: Data[];
  chart = Chart;
  datachartbool=false;
  servicebool=false;
  databool=false;
  fiberstring ='';
  phonestring ='';


  constructor(private http: HttpClient,
              private router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`

    });
    //console.log(localStorage.getItem('token'));
    this.http.get('http://localhost:8000/api/user',{headers: headers}).subscribe(
      result=>{
        this.user=result;
        console.log("This is the user:");
        console.log(this.user.DNI);

        this.http.post('http://localhost:8000/api/services', this.user,{headers: headers}).subscribe(
          result=>{
            this.services=<Services[]>result
            console.log("this is the result of get api/services: ")
            console.log(result);
            console.log("this is the result of this.services: ")
            console.log(this.services);

              if (this.services!=null) {
                console.log("this is the result of data1: ")
                let data1 =this.services[0].data_type;
                console.log(data1);





                this.http.post('http://localhost:8000/api/data', this.user,{headers: headers}).subscribe(
                  result=>{
                    this.data=<Data[]>result
                    console.log("this is the result of get api/data: ")
                    console.log(result);

                    if (this.data!=null) {
                      if (this.services[0].data) {
                        this.datachartbool=true;
                        this.doughnutChartLabels = ['Data used (GigaBytes)', 'Remaining data (GigaBytes)'];
                        this.doughnutChartData = [this.data[0].data/1000, this.services[0].data_type/1000];

                      }

                      if (this.services[0].fiber) {
                        this.fiberstring = 'This month you have used ' + this.data[0].fiber/1000 + ' (GigaBytes) out of unlimited';

                      }
                      if (this.services[0].phone) {
                        this.phonestring = 'This month you have used ' + this.data[0].phone_minutes + ' minutes out of unlimited';
                      }




                    }else this.databool=true;

                  },
                  //result=>console.log(localStorage.getItem('token'))
                  err=>{
                    console.log(err);
                  }
                );

              }else this.servicebool=true;

          },
          //result=>console.log(localStorage.getItem('token'))
          err=>{
            console.log(err);
          }
        );









      },
      //result=>console.log(localStorage.getItem('token'))

      err=>{
        console.log(err);
        localStorage.removeItem('token');
        /*this.authService.logout();
        this.router.navigate(['/login']);*/
      }
    );
  }

}
export class Services{
  DNI: string;
  data: boolean;
  data_type: number;
  fiber: boolean;
  fiber_type:number;
  phone:boolean;
  phone_type:number;
  tv:boolean;
}
export class Data{
  DNI: string;
  month: number;
  year: number;
  data: number;
  phone_minutes:number;
  messages:number;
  fiber:number;
}
