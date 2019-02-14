import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CourseService {
    constructor(private http: HttpClient) {
    }

    sendToServer(course) {
        let url = "http://localhost:8084/addCourse";
        return this.http.post(url, course);
    }
}
