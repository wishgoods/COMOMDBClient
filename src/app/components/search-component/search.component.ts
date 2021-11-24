import {Component,OnInit,Injectable, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SeasonsComponent } from '../seasons-component/seasons.component';



@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})

export class SearchComponent implements OnInit {
  selectedseries: string = "Shelock";
  id: string = "omdbClient";
  apiUrl: string = "https://localhost:44357/api/Series?SeriesTitle=";
  seasons: string = "0";
  @ViewChild(SeasonsComponent) child?:SeasonsComponent ;
 
  constructor( private http: HttpClient) {

  }

  ngOnInit(): void {
    
  }
  selectOption(series: any) {
   
    this.http.get(this.apiUrl + series.target.value,{responseType:'text'}).subscribe(result => {
      this.seasons = result.split(',')[4].replace('}','');
      this.child?.changeSeasonsNumber(this.seasons,this.selectedseries);
    });
    
  }

}
