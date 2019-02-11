
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
sendToServer(username, password){
  //our code to be communicated with the server will be here
  let url="" + "?username="+username + "&password=" + password;
  return this.http.get(url)
}
    }
    