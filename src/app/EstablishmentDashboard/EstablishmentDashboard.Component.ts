import {OnInit, Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Establishment } from '../Establishment/EstablishmentRegistration/Establishment';
import { EstablishmentDashboardService } from './EstablishmentComponent.Service';


@Component({
    selector : 'EstablishmentDashboard',
    templateUrl: './EstablishmentDashboard.Component.html',
   // styleUrls:['./flights-list.component.css'],
   
})

export class EstablishmentDashboardComponent{
    establishment:Establishment[];

     constructor( public ess:EstablishmentDashboardService){

    }
    fetchEstablishment(){
        this.ess.getFromServer().subscribe(
            data =>{
                this.establishment=data;
            }
        );
    }
   
}
