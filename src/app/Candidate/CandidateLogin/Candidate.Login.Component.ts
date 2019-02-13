
import {OnInit, Component} from '@angular/core';
import { CandidateLoginService } from './Candidate.Login.Service';





@Component({
    selector : 'CandidateLogin',
    templateUrl: './Candidate.Login.Component.html',
    //styleUrls:['./flights-list.component.css'],
   
})

export class CandidateLoginComponent{
        username : string;
        password : string;
        request  : string;
     constructor( public cls:CandidateLoginService){

    }
    
    login(){
        this.cls.sendToServer(this.username, this.password).subscribe(
            data =>{
                this.request=data.toString();
                if(!+this.request){
                    alert("login failed");
                    this.username = "";
                    this.password = "";
                }
                else {
                    alert("login Success");
                    // route to dashboard
                }
                
            }
        );
    }
   
}
