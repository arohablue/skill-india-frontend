import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../Candidate/CandidateRegistration/Candidate';

@Injectable()

export class CandidateDashboardService {

    // candidate: Candidate[];
constructor(private http:HttpClient){

}
getFromServer() :  Observable<Candidate[]>{

    let url= 'http://localhost:8084/candidatetList';
      
     return this.http.get<Candidate[]>(url);


    }
}