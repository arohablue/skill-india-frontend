import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentRegistrationComponent } from './EstablishmentRegistration/Establishment.Registration.Component';
import { EstablishmentLogincomponent } from './EstablishmentLogin/Establishment.Login.component';

const routes: Routes = [
  { path: 'establishmentregistration', component: EstablishmentRegistrationComponent },
  { path: 'establishmentLogin', component: EstablishmentLogincomponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
