import {OnInit, Component} from '@angular/core';
import { CandidateDashboardService } from '../_services/CandidateDashboard.Service';
import { Candidate } from '../_models/Candidate';
import { Establishment } from '../_models/Establishment';
import { Address } from '../_models/Address';
import { canApp } from '../_models/canApp';
import { Router } from '@angular/router';


@Component({
    selector : 'CandidateDashboard',
    templateUrl: './CandidateDashboard.Component.html',
   // styleUrls:['./flights-list.component.css'],

})

export class CandidateDashboardComponent{
    establishmnets:Establishment[];
    establishmnetsmodel : Establishment [];
    candidate : Candidate = new Candidate(new Address());
    username : string ;
    resp : string ;
    candidateId : number;
    canApp : canApp = new canApp();
    status : string[] = [];
     constructor( public ess:CandidateDashboardService, public router : Router){

    }

    ngOnInit() {

      if(this.candidate == null){
        this.router.navigate(['/candidate/login']);
      }
      this.candidate = JSON.parse(localStorage.getItem('user'));
      this.username = this.candidate.candidateName;
      this.candidateId = JSON.parse(localStorage.getItem('candidateId'));
      this.resp = "Not Applied" ;
      this.fetchCandidate();

  }



    fetchCandidate(){
        this.ess.getFromServer().subscribe(
            data =>{
                this.establishmnets=data;
            }
        );
        this.checkstatus()
    }

    applyEstablishmnet(est,can){
        this.canApp.canId = this.candidateId;
        this.canApp.estId = est;
        this.canApp.app_status = "Applied";
        this.ess.apply(this.canApp).subscribe(
            data =>{
                this.resp=data['message'];
            }
        );
    }
    checkstatus() {
      console.log(this.establishmnets)
      this.establishmnets.forEach(element => {
        console.log(element)
        this.ess.checkAppstatus(element).subscribe(
          data =>{
            console.log(this.status)
              this.status.push(data['message']);
          }
      );

        });

    return this.resp;
    }

}
