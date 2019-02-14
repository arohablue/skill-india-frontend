
import {OnInit, Component} from '@angular/core';
import { EstablishmentRegistrationService } from '../../_services/Establishment.Registration.Service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Establishment } from '../../_models/Establishment';

@Component({
    selector : 'EstablishmentRegistration',
    templateUrl: './Establishment.Registration.Component.html',
   // styleUrls:['./flights-list.component.css'],
   
})

export class EstablishmentRegistrationComponent{
    est: Establishment = new Establishment(); 
    response:string;

     constructor(   public ess:EstablishmentRegistrationService,
                    private route: ActivatedRoute,
                    private router: Router,){

    }
    addEstablishment(){
        this.ess.sendToServer(this.est).subscribe(
            data =>{
                this.response=data['message']
                if(!this.response) {
                    this.router.navigate(['/establishment/login']);
                }
                
            }
        );
    }
   
}
