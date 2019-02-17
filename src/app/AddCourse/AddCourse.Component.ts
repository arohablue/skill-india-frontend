import {OnInit, Component} from '@angular/core';
import {  AddCourseService } from '../_services/AddCourse.Service';
import { Course } from '../_models/Course';


@Component({
    selector : 'Course-Form',
    templateUrl: './AddCourse.Component.html'
})

export class AddCourseComponent{
    course: Course = new Course();
    response:string;

     constructor( public cs:AddCourseService){

    }
    addCourse(){
        
        this.cs.sendToServer(this.course).subscribe(
            data =>{
                this.response=data['Progress']
            }
        );
    }
   
}