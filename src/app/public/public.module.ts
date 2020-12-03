import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FiberComponent } from './fiber/fiber.component';
import { DataComponent } from './data/data.component';
import { TvComponent } from './tv/tv.component';
import { Plan2Component } from './plan2/plan2.component';




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FiberComponent,
    DataComponent,
    TvComponent,
    Plan2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
}) 
export class PublicModule { }
