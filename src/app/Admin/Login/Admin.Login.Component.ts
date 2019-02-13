
import {OnInit, Component} from '@angular/core';

import { AdminLoginService } from './Admin.Login.Service';





@Component({
    selector : 'AdminLogin',
    templateUrl: './Admin.Login.Component.html',
    //styleUrls:['./flights-list.component.css'],
   
})

export class AdminLoginComponent{
        username : string;
        password : string;
        request  : string;
     constructor( public als:AdminLoginService){

    }
    
    login(){
        this.als.sendToServer(this.username, this.password).subscribe(
            data =>{
                this.request=data['status']
            }
        );
    }
   
}
