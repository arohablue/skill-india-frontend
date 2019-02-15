import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from '../_models/Establishment';

@Injectable()

export class SearchPageService {

constructor(private http:HttpClient){

}
getFromServer() :  Observable<Establishment[]>{

    let url= 'http://localhost:8084/searchResult';
      
     return this.http.get<Establishment[]>(url);


    }
}
    