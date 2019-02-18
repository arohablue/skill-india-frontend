
import {OnInit, Component} from '@angular/core';
import { Establishment } from '../_models/Establishment';
import { Route, Router } from '@angular/router';
import { CandidateDashboardService } from '../_services/CandidateDashboard.Service';

@Component({
    selector : 'AdminDashboard',
    templateUrl: './AdminDashboard.Component.html',
   // styleUrls:['./flights-list.component.css'],
})

export class AdminDashboardComponent{
  establishmnets:Establishment[];
     constructor( public ess:CandidateDashboardService, public router : Router){

    }


    ngOnInit() {
      this.fetchCandidate();
  }

    fetchCandidate(){
      this.ess.getFromServer().subscribe(
          data =>{
              this.establishmnets=data;
          }
      );
  }


}
