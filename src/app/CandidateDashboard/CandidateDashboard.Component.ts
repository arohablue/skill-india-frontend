import {OnInit, Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateDashboardService } from './CandidateDashboard.Service';
import { Candidate } from '../_models/Candidate';


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
