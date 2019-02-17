import {OnInit, Component} from '@angular/core';
import { Establishment } from '../_models/Establishment';
import { EstablishmentVerificationService } from './EstablishmentVerfication.Service';


@Component({
    selector : 'EstablishmentVerification',
    templateUrl: './EstablishmentVerification.Component.html',
   
})

export class EstablishmentVerificationComponent{
    establishment:Establishment[];

     constructor( public ess:EstablishmentVerificationService){

    }
    fetchEstablishment(){
        this.ess.getFromServer().subscribe(
            data =>{
                this.establishment=data;
            }
        );
    }
                              // accept and reject action pending
   
}
