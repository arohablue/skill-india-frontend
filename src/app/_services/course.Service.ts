import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {Observable} from '@angular/'
@Injectable() // Dependencies injectable
//no need of new keyword to create obj
export class CourseService {
    //injecting Angular's Httpclient API
    constructor(private http: HttpClient) {
    }
    sendToServer(cs) {
        //our code to be communicated with the server will be here
        let url = "";
        return this.http.post(url, cs);
    }
}
