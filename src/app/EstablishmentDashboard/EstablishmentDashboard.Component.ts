import {OnInit, Component} from '@angular/core';
import { Establishment } from '../_models/Establishment';
import { EstablishmentDashboardService } from '../_services/EstablishmentDashboard.Service';
import { Candidate } from '../_models/Candidate';


@Component({
    selector : 'EstablishmentDashboard',
    templateUrl: './EstablishmentDashboard.Component.html',
   // styleUrls:['./flights-list.component.css'],

})

export class EstablishmentDashboardComponent{
    candidates: Candidate[];
    establishment : Establishment = new Establishment();
    username : string ;

     constructor( public ess:EstablishmentDashboardService){
        this.establishment = JSON.parse(localStorage.getItem('user'));
        this.username = this.establishment.estName
        console.log("this.username")

    }

    ngOnInit() {
      this.fetchEstablishment();

  }


    fetchEstablishment(){
        this.ess.getFromServer().subscribe(
            data =>{
                this.candidates=data;
            }
        );
    }

}
