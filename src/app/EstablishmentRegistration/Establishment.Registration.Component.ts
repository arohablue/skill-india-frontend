
import {OnInit, Component} from '@angular/core';
import { EstablishmentRegistrationService } from './Establishment.Registration.Service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Establishment } from './Establishment';

@Component({
    selector : 'EstablishmentRegistration',
    templateUrl: './Establishment.Registration.Component.html',
   // styleUrls:['./flights-list.component.css'],
   
})

export class EstablishmentRegistrationComponent{
    est: Establishment = new Establishment(); 
    response:string;

     constructor( public ess:EstablishmentRegistrationService){

    }
    addEstablishment(mform){
        this.ess.sendToServer(this.est).subscribe(
            data =>{
                this.response=data['status']
            }
        );
    }
   
}
