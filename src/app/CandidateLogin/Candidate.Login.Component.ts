
import {OnInit, Component} from '@angular/core';
import { EstablishmentLoginService } from '../EstablishmentLogin/Establishment.Login.service';





@Component({
    selector : 'CandidateLogin',
    templateUrl: './Candidate.Login.Component',
    //styleUrls:['./flights-list.component.css'],
   
})

export class CandidateLoginComponent{
        username : string;
        password : string;
        request  : string;
     constructor( public ess:EstablishmentLoginService){

    }
    
    login(){
        this.ess.sendToServer(this.username, this.password).subscribe(
            data =>{
                this.request=data['status']
            }
        );
    }
   
}
