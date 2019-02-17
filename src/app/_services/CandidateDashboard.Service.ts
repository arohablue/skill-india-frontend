import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../_models/Candidate';
import { Establishment } from '../_models/Establishment';

@Injectable()

export class CandidateDashboardService {

    // candidate: Candidate[];
constructor(private http:HttpClient){

}
getFromServer() :  Observable<Establishment[]>{

    let url= 'http://localhost:8084/establishmentList';
      
     return this.http.get<Establishment[]>(url);


    }
}