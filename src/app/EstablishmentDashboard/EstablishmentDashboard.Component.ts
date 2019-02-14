import {OnInit, Component} from '@angular/core';
import { Establishment } from '../_models/Establishment';
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
