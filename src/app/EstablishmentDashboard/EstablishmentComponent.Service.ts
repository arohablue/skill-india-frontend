import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Establishment } from '../Establishment/EstablishmentRegistration/Establishment';
import { Observable } from 'rxjs';

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
    