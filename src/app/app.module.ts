import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomepageBody } from './HomepageBody/homepage-body.component';
import { EstablishmentRegistrationComponent } from './Establishment/EstablishmentRegistration/Establishment.Registration.Component';
import { EstablishmentLoginComponent } from './Establishment/EstablishmentLogin/Establishment.Login.component';
import { CandidateRegistrationComponent } from './Candidate/CandidateRegistration/Candidate.Registration.Component';
import { CandidateLoginComponent } from './Candidate/CandidateLogin/Candidate.Login.Component';
import { Homepage } from './homepage/home.page.component';
import { EstablishmentRegistrationService } from './Establishment/EstablishmentRegistration/Establishment.Registration.Service';
import { EstablishmentLoginService } from './Establishment/EstablishmentLogin/Establishment.Login.Service';
import { CandidateRegistrationService } from './Candidate/CandidateRegistration/Candidate.Registration.Service';
import { CandidateLoginService } from './Candidate/CandidateLogin/Candidate.Login.Service';
import { CourseService } from './Course/Course.Service';
import { HomepageFooter } from './HomepageFooter/HoempageFooter.Component';
import { CourseComponent } from './Course/CourseComponent';




@NgModule({
  declarations: [
    AppComponent,
    EstablishmentRegistrationComponent,
    EstablishmentLoginComponent,
    CandidateRegistrationComponent,
    CandidateLoginComponent,
    Homepage,
    HomepageBody,
    HomepageFooter,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EstablishmentRegistrationService,
    EstablishmentLoginService,
    CandidateRegistrationService,
    CandidateLoginService,
    CourseService,
    HttpClient,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
