import {OnInit, Component} from '@angular/core';
import { Establishment } from '../_models/Establishment';
import { SearchPageService } from './search.service';


@Component({
    selector : 'search-page',
    templateUrl: './search.component.html'
   
})

export class SearchPageComponent{
    searchResult:Establishment[];

     constructor( public sps:SearchPageService){

    }
    fetchSearchResult(){
        this.sps.getFromServer().subscribe(
            data =>{
                this.searchResult=data;
            }
        );
    }
   
}
