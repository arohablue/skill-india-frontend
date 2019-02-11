
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import {Observable} from '@angular/'

@Injectable()// Dependencies injectable
//no need of new keyword to create obj

export class CandidateLoginService {
   
    //injecting Angular's Httpclient API
constructor(private http:HttpClient){

}
sendToServer(elf){
        //our code to be communicated with the server will be here
        let url="";
     return this.http.get(url,elf)
     
      }

    }
    