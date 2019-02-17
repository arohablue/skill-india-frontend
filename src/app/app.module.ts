import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }  from './app-routing.module';
import { AlertComponent } from './_directives';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageBody } from './HomepageBody/homepage-body.component';
import { EstablishmentRegistrationComponent } from './Establishment/EstablishmentRegistration/Establishment.Registration.Component';
import { EstablishmentLoginComponent } from './Establishment/EstablishmentLogin/Establishment.Login.component';
import { CandidateRegistrationComponent } from './Candidate/CandidateRegistration/Candidate.Registration.Component';
import { CandidateLoginComponent } from './Candidate/CandidateLogin/Candidate.Login.Component';
import { Homepage } from './homepage/home.page.component';
import { EstablishmentRegistrationService } from './_services/Establishment.Registration.Service';
import { EstablishmentLoginService } from './_services/Establishment.Login.service';
import { CandidateRegistrationService } from './_services/Candidate.Registration.Service';
import { CandidateLoginService } from './_services/Candidate.Login.Service';
import { ValidationService } from './_services/ValidationService';
import { AdminLoginComponent } from './Admin/Login/Admin.Login.Component';
import { AuthenticationService, AlertService } from './_services';
import { HomepageFooter } from './HomepageFooter/HoempageFooter.Component';
import { EstablishmentDashboardComponent } from './EstablishmentDashboard/EstablishmentDashboard.Component';

import { SearchPageComponent } from './Search/search.component';
import { SearchPageService } from './Search/search.service';
import { EstablishmentDashboardService } from './_services/EstablishmentDashboard.Service';
import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.Component';
import { EstablishmentVerificationComponent } from './Establishment Verification/EstablishmentVerification.Component';
import { EstablishmentVerificationService } from './Establishment Verification/EstablishmentVerfication.Service';
import { AddCourseComponent } from './AddCourse/AddCourse.Component';
import { AddCourseService } from './_services/AddCourse.Service';




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
    AlertComponent,
    AdminLoginComponent,
    EstablishmentDashboardComponent,
    SearchPageComponent,
    AddCourseComponent,
    AdminDashboardComponent,
    EstablishmentVerificationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    AppRoutingModule,
    AuthenticationService,
    AlertService,
    CandidateRegistrationService,
    CandidateLoginService,
    AddCourseService,
    EstablishmentRegistrationService,
    EstablishmentLoginService,
    EstablishmentDashboardService,
    EstablishmentVerificationService,
    
    HttpClient,
    
    ValidationService,
    
    SearchPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
