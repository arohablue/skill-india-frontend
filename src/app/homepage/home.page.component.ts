
import {OnInit, Component} from '@angular/core';

@Component({
    selector : 'home-page',
    templateUrl: './home.page.component.html',
   // styleUrls:['./flights-list.component.css'],
})

export class Homepage{
    private homepageNational=require("src/assets/Bootstrap/img/National.png");
    private homepageEmblem=require("src/assets/Bootstrap/img/emblem.jpg");
     constructor(){

    }
}
