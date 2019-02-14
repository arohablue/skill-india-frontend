import {OnInit, Component} from '@angular/core';
import { CourseService } from './Course.Service';
import { Course } from './Course';


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