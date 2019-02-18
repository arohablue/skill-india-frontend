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

    apply(can){

      let url= 'http://localhost:8084/candidate/application/apply';
      console.log(can);
       return this.http.post(url, can);
      }

      checkAppstatus(can){
        let url= 'http://localhost:8084/candidate/application/status';
        console.log(can);
         return this.http.post(url, can);
        }
}
