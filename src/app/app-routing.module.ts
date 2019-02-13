import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageBody } from './HomepageBody/homepage-body.component';
import { EstablishmentRegistrationComponent } from './Establishment/EstablishmentRegistration/Establishment.Registration.Component';
import { EstablishmentLoginComponent } from './Establishment/EstablishmentLogin/Establishment.Login.component';
import { CandidateRegistrationComponent } from './Candidate/CandidateRegistration/Candidate.Registration.Component';
import { CandidateLoginComponent } from './Candidate/CandidateLogin/Candidate.Login.Component';

const routes: Routes = [
  { path: 'establishmentregistration', component: EstablishmentRegistrationComponent},
  { path: 'establishmentlogin', component: EstablishmentLoginComponent },
  { path: 'candidateregistration',component: CandidateRegistrationComponent},
  { path: 'candidatelogin',component: CandidateLoginComponent},
  { path: 'homepagebody',component: HomepageBody},
  { path: '',component: HomepageBody}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
