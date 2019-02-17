import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from '../_models/Establishment';

@Injectable()

export class EstablishmentDashboardService {

    // establishment: Establishment[];
constructor(private http:HttpClient){

}
getFromServer() :  Observable<Establishment[]>{

    let url= 'http://localhost:8084/establishmentList';
      
     return this.http.get<Establishment[]>(url);


    }
}
    