import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from '../_models/Establishment';
import { Candidate } from '../_models/Candidate';

@Injectable()

export class EstablishmentDashboardService {

    // establishment: Establishment[];
constructor(private http:HttpClient){

}
getFromServer() :  Observable<Candidate[]>{

    let url= 'http://localhost:8084/candidateList';

     return this.http.get<Candidate[]>(url);


    }
}
