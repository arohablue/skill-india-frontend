
import {OnInit, Component} from '@angular/core';
import { EstablishmentLoginService} from './Establishment.Login.Service';

@Component({
    selector : 'EstablishmentLogin',
    templateUrl: './Establishment.Login.Component.html',
    //styleUrls:['./flights-list.component.css'],
   
})

export class EstablishmentLoginComponent{
    request:string;
    username : string;
    password : string;

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
