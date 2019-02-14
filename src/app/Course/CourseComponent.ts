import { Component } from '@angular/core';
import { Course } from '../_models/Course';
import { CourseService } from '../_services/Course.Service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
@Component({
    selector: 'Course-Form',
    templateUrl: './Course.Component.html'
})
export class CourseComponent {
    course: Course = new Course();
    response: string;
    constructor(public cs: CourseService) {
    }
    addCourse() {
        this.cs.sendToServer(this.course).subscribe(data => {
            this.response = data['Progress'];
        });
    }
}
