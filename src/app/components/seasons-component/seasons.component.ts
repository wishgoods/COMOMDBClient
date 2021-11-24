import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable, ViewChild  } from '@angular/core';
import { EpisodesComponent } from '../episodes-component/episodes.component';


@Injectable({ 
  providedIn: 'root' 
})
@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css'],
  
})

export class SeasonsComponent implements OnInit {
  seasons:number = 0;
  seasons_numbers:number[] =[];
  selectedseason:string = "";
  selectedseries:string = "";
  show_table :boolean= false;
  apiUrl: string = "https://localhost:44357/api/Seasons?SeriesTitle=";
  @ViewChild(EpisodesComponent) child?:EpisodesComponent ;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    
    
  }
  changeSeasonsNumber(seasons_number:string,serires_name:string)
  {
    this.selectedseries =serires_name;
    this.seasons_numbers=[];
    this.seasons =  Number(seasons_number);
    for(let i =1 ;i<this.seasons;i++)
    {
      this.seasons_numbers.push(i);
    }

  }
  selectOption(series: any) {
 
    this.http.get(this.apiUrl +this.selectedseries+"&SeriesSeason="+ series.target.value,{responseType:'text'}).subscribe(result => {
      this.child?.changeEpisodes(result.slice(1,result.length-1));
      this.show_table = true;
    });
    
  }
}
