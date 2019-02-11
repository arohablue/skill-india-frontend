
import {OnInit, Component} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstablishmentLoginService } from '../EstablishmentLogin/Establishment.Login.service';
import { CandidateLogin } from './CandidateLogin';




@Component({
    selector : 'CandidateLogin',
    template: '',
    //styleUrls:['./flights-list.component.css'],
   
})

export class CandidateLogincomponent{
    clf: CandidateLogin =new CandidateLogin();
request:string;

     constructor( public ess:EstablishmentLoginService){

    }
    add(mform){
        this.ess.sendToServer(this.clf).subscribe(
            data =>{
                this.request=data['status']
            }
        );
    }
   
}
