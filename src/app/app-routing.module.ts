import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { DataComponent } from './public/data/data.component';
import { FiberComponent } from './public/fiber/fiber.component';
import { TvComponent } from './public/tv/tv.component';
import { Plan2Component } from './public/plan2/plan2.component';
import { CoverageComponent } from './public/coverage/coverage.component';
import { TopNavbarComponent } from './component/navbar/navbar.component';
import { VerifiedComponent } from './public/verified/verified.component';
const routes: Routes = [

  {
    path: '',
     component: PublicComponent,
     children:[
       {path: '', component: HomeComponent},
       {path: 'login', component: LoginComponent},
       {path: 'register', component: RegisterComponent},
       {path: 'data', component: DataComponent},
       {path: 'fiber', component: FiberComponent},
       {path: 'tv', component: TvComponent},
       {path: 'plan2', component: Plan2Component},
       {path: 'coverage', component: CoverageComponent},
       {path: 'navbar', component: TopNavbarComponent},
       {path: 'verified', component: VerifiedComponent}
     ]
    },
  {path: 'profile', component: SecureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
