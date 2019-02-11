import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EstablishmentRegistrationService } from './EstablishmentRegistration/Establishment.Registration.Service';

import { EstablishmentRegistrationComponent } from './EstablishmentRegistration/Establishment.Registration.Component';
import { EstablishmentLogincomponent } from './EstablishmentLogin/Establishment.Login.component';
import { CandidateRegistrationService } from './CandidateRegistration/Candidate.Registration.Service';
import { CandidateRegistrationComponent } from './CandidateRegistration/Candidate.Registration.Component';
import { CandidateLogincomponent } from './CandidateLogin/Candidate.Login.Component';
import { Homepage } from './homepage/home.page.component';
import { EstablishmentLoginService } from './EstablishmentLogin/Establishment.Login.service';


@NgModule({
  declarations: [
    AppComponent,EstablishmentRegistrationComponent,
    EstablishmentLogincomponent,
    CandidateRegistrationComponent,
    CandidateLogincomponent,
    Homepage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule
  ],
  providers: [EstablishmentRegistrationService,
    EstablishmentLoginService,
    CandidateRegistrationService,
    HttpClient,
    AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
