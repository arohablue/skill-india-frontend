import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EstablishmentRegistrationService } from './EstablishmentRegistration/Establishment.Registration.Service';

import { EstablishmentRegistrationComponent } from './EstablishmentRegistration/Establishment.Registration.Component';
import { EstablishmentLoginComponent } from './EstablishmentLogin/Establishment.Login.Component';
import { CandidateRegistrationService } from './CandidateRegistration/Candidate.Registration.Service';
import { CandidateRegistrationComponent } from './CandidateRegistration/Candidate.Registration.Component';
import { CandidateLoginComponent } from './CandidateLogin/Candidate.Login.Component';
import { Homepage } from './homepage/home.page.component';
import { EstablishmentLoginService } from './EstablishmentLogin/Establishment.Login.Service';
import { CandidateLoginService } from './CandidateLogin/Candidate.Login.Service';
import { HomepageBody } from './homepage-body/homepage-body.component';


@NgModule({
  declarations: [
    AppComponent,
    EstablishmentRegistrationComponent,
    EstablishmentLoginComponent,
    CandidateRegistrationComponent,
    CandidateLoginComponent,
    Homepage,
    HomepageBody
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
    HttpClient,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
