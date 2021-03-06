import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageBody } from './HomepageBody/homepage-body.component';
import { EstablishmentRegistrationComponent } from './Establishment/EstablishmentRegistration/Establishment.Registration.Component';
import { EstablishmentLoginComponent } from './Establishment/EstablishmentLogin/Establishment.Login.component';
import { CandidateRegistrationComponent } from './Candidate/CandidateRegistration/Candidate.Registration.Component';
import { CandidateLoginComponent } from './Candidate/CandidateLogin/Candidate.Login.Component';
import { AdminLoginComponent } from './Admin/Login/Admin.Login.Component';
import { EstablishmentDashboardComponent } from './EstablishmentDashboard/EstablishmentDashboard.Component';
import { SearchPageComponent } from './Search/search.component';


import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.Component';
import { EstablishmentVerificationComponent } from './Establishment Verification/EstablishmentVerification.Component';
import { AddCourseComponent } from './AddCourse/AddCourse.Component';

import { CandidateDashboardComponent } from './CandidateDashboard/CandidateDashboard.Component';


const routes: Routes = [
  { path: 'establishment/registration', component: EstablishmentRegistrationComponent},
  { path: 'establishment/login', component: EstablishmentLoginComponent },
  { path: 'candidate/registration',component: CandidateRegistrationComponent},
  { path: 'candidate/login',component: CandidateLoginComponent},
  { path: 'homepagebody',component: HomepageBody},
  { path: '',component: HomepageBody},
  { path: 'admin/login',component: AdminLoginComponent},
  { path: 'establishment/dashboard',component: EstablishmentDashboardComponent},
  { path: 'search/Establishment',component: SearchPageComponent},

  { path: 'add/course',component:AddCourseComponent},
  { path: 'admin/dashboard',component: AdminDashboardComponent},
  { path: 'admin/establishment/verification',component: EstablishmentVerificationComponent},

  { path: 'add/course',component: AddCourseComponent},
  { path: 'candidate/dashboard',component: CandidateDashboardComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
