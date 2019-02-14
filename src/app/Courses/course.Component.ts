import {OnInit, Component} from '@angular/core';
import { courses } from '../_models/courses';
import { CourseService } from '../_services/course.Service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';




@Component({
    selector : 'Course-Forms',
    templateUrl: './course.Component.html'
})

export class CourseComponent{
    cc: courses = new courses();
    response:string;

     constructor( public es:CourseService){

    }
    addCandidate(){
        
        this.es.sendToServer(this.cc).subscribe(
            data =>{
                this.response=data['Progress']
            }
        );
    }
   
}
