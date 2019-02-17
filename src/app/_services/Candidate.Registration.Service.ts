
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import {Observable} from '@angular/'

@Injectable()// Dependencies injectable
//no need of new keyword to create obj

export class CandidateRegistrationService {

    //injecting Angular's Httpclient API
constructor(private http:HttpClient){

}
sendToServer(crs){
        console.log("in registration service"+crs)
        //our code to be communicated with the server will be here
        let url="http://localhost:8084/candidate/add";
        return this.http.post(url,crs)
      }

    }
