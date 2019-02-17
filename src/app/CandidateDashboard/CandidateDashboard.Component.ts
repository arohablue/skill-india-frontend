import {OnInit, Component} from '@angular/core';
import { CandidateDashboardService } from '../_services/CandidateDashboard.Service';
import { Candidate } from '../_models/Candidate';
import { Establishment } from '../_models/Establishment';
import { Address } from '../_models/Address';


@Component({
    selector : 'CandidateDashboard',
    templateUrl: './CandidateDashboard.Component.html',
   // styleUrls:['./flights-list.component.css'],
   
})

export class CandidateDashboardComponent{
    establishmnets:Establishment[];
    candidate : Candidate = new Candidate(new Address());
    username : string ;

     constructor( public ess:CandidateDashboardService){

        this.candidate = JSON.parse(localStorage.getItem('user'));
        this.username = this.candidate.candidateName
    }



    fetchCandidate(){
        this.ess.getFromServer().subscribe(
            data =>{
                this.establishmnets=data;
            }
        );
    }
   
}
