import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentRegistrationComponent } from './EstablishmentRegistration/Establishment.Registration.Component';
import { EstablishmentLoginComponent } from './EstablishmentLogin/Establishment.Login.Component';
import { CandidateLoginComponent } from './CandidateLogin/Candidate.Login.Component';
import { CandidateRegistrationComponent } from './CandidateRegistration/Candidate.Registration.Component';

const routes: Routes = [
  { path: 'establishmentregistration', component: EstablishmentRegistrationComponent },
  { path: 'establishmentlogin', component: EstablishmentLoginComponent },
  { path: 'candidateregistration',component: CandidateRegistrationComponent},
  { path: 'candidatelogin',component: CandidateLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
