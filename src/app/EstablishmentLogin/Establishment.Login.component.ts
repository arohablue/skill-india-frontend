
import {OnInit, Component} from '@angular/core';
import { EstablishmentLoginService} from './Establishment.Login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstablishmentLoginForm } from './EstablishmentLogin';



@Component({
    selector : 'EstablishmentLogin',
    templateUrl: './Establishment.Login.Component.html',
    //styleUrls:['./flights-list.component.css'],
   
})

export class EstablishmentLogincomponent{
    elf: EstablishmentLoginForm =new EstablishmentLoginForm();
request:string;

     constructor( public ess:EstablishmentLoginService){

    }
    add(mform){
        this.ess.sendToServer(this.elf).subscribe(
            data =>{
                this.request=data['status']
            }
        );
    }
   
}
