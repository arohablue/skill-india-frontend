import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EstablishmentRegistrationService } from './EstablishmentRegistration/Establishment.Registration.Service';

import { EstablishmentRegistrationComponent } from './EstablishmentRegistration/Establishment.Registration.Component';
import { EstablishmentLogincomponent } from './EstablishmentLogin/Establishment.Login.component';
import { Homepage } from './homepage/home.page.component';
import { EstablishmentLoginService } from './EstablishmentLogin/Establishment.Login.service';


@NgModule({
  declarations: [
    AppComponent,
    EstablishmentRegistrationComponent,
    EstablishmentLogincomponent,
    Homepage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule
  ],
  providers: [EstablishmentRegistrationService,
    EstablishmentLoginService,
    HttpClient,
    AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
