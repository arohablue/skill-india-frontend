
import {OnInit, Component} from '@angular/core';
import { EstablishmentLoginService} from '../../_services/Establishment.Login.service';
import { Router } from '@angular/router';

@Component({
    selector : 'EstablishmentLogin',
    templateUrl: './Establishment.Login.Component.html',
    //styleUrls:['./flights-list.component.css'],
   
})

export class EstablishmentLoginComponent{
    request : string;
    username : string;
    password : string;

    constructor( public ess:EstablishmentLoginService, private router :Router){

    }

    login(){
        this.ess.sendToServer(this.username, this.password).subscribe(
            data => {
                this.request=data.toString();
                if(!+this.request){
                    alert("login failed");
                    this.username = "";
                    this.password = "";
                }
                else {

              this.router.navigate(['/establishment/dashboard']);
            
                }
                
            }
        );
    }
   
}
