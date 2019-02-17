import {OnInit, Component} from '@angular/core';
import { Establishment } from '../_models/Establishment';
import { EstablishmentDashboardService } from '../_services/EstablishmentComponent.Service';


@Component({
    selector : 'EstablishmentDashboard',
    templateUrl: './EstablishmentDashboard.Component.html',
   // styleUrls:['./flights-list.component.css'],
   
})

export class EstablishmentDashboardComponent{
    establishments: Establishment[];
    establishment : Establishment = new Establishment();
    username : string ;

     constructor( public ess:EstablishmentDashboardService){
        this.establishment = JSON.parse(localStorage.getItem('user'));
        this.username = this.establishment.estName
        console.log("this.username")

    }
    fetchEstablishment(){
        this.ess.getFromServer().subscribe(
            data =>{
                this.establishments=data;
            }
        );
    }
   
}
