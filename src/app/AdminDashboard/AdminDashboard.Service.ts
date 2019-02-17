import { Establishment } from '../_models/Establishment';
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../_models/Candidate';

@Injectable()// Dependencies injectable
//no need of new keyword to create obj

export class AdminDashboardService {
    //injecting Angular's Httpclient API
constructor(private http:HttpClient){

}
getFromServer() :  Observable<Candidate[]>{

    let url= 'http://localhost:8084/candidatetList';
      
     return this.http.get<Candidate[]>(url);


    }

    }
