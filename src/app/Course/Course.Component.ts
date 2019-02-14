import {OnInit, Component} from '@angular/core';
import { CourseService } from '../_services/Course.Service';
import { Course } from '../_models/Course';


@Component({
    selector : 'Course-Form',
    templateUrl: './Course.Component.html'
})

export class CourseComponent{
    course: Course = new Course();
    response:string;

     constructor( public cs:CourseService){

    }
    addCourse(){
        
        this.cs.sendToServer(this.course).subscribe(
            data =>{
                this.response=data['Progress']
            }
        );
    }
   
}