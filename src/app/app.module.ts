import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureComponent } from './secure/secure.component';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { TopNavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

import { ChartsModule } from 'ng2-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgwWowModule } from 'ngx-wow';
import { NgxIbanModule } from "ngx-iban";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//import { WOW } from 'wow.js';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    TopNavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
    ChartsModule,
    NgxIbanModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
