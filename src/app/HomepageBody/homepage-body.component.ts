
import {OnInit, Component} from '@angular/core';

@Component({
    selector : 'home-page-body',
    templateUrl: './homepage-body.component.html',
   // styleUrls:['./flights-list.component.css'],
})

export class HomepageBody{
    private homepageMain=require("src/assets/Bootstrap/img/Skill_India.png");
    private homepageNational=require("src/assets/Bootstrap/img/National.png");
    private homepageEmblem=require("src/assets/Bootstrap/img/emblem.jpg");
     constructor(){

    }
}