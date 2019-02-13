import {OnInit, Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from '../Candidate/CandidateRegistration/Candidate';
import { CandidateDashboardService } from './CandidateDashboard.Service';


@Component({
    selector : 'CandidateDashboard',
    templateUrl: './CandidateDashboard.Component.html',
   // styleUrls:['./flights-list.component.css'],
   
})

export class CandidateDashboardComponent{
    candidate:Candidate[];

     constructor( public ess:CandidateDashboardService){

    }
    fetchCandidate(){
        this.ess.getFromServer().subscribe(
            data =>{
                this.candidate=data;
            }
        );
    }
   
}
