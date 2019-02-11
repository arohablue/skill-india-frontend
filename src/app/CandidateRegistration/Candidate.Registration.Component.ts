
import {OnInit, Component} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from './Candidate';
import { CandidateRegistrationService } from './Candidate.Registration.Service';


@Component({
    selector : 'CandidateRegistration',
    templateUrl: './Candidate.Registration.component.html',
  
   
})

export class CandidateRegistrationComponent{
    crc: Candidate = new Candidate(); 
    response:string;

     constructor( public ess:CandidateRegistrationService){

    }
    addCandidate(mform){
        this.ess.sendToServer(this.crc).subscribe(
            data =>{
                this.response=data['Progress']
            }
        );
    }
   
}
