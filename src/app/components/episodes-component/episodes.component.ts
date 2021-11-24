import { Component, Injectable, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { DataResult, orderBy, process, SortDescriptor } from "@progress/kendo-data-query";
import { Observable, of } from "rxjs";


@Injectable({ 
  providedIn: 'root' 
})
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
  
})

export class EpisodesComponent implements OnInit {


  
  selected_series?: string = 'Sherlock';
  episodes:string[][]=[];

  public gridItems: Observable<GridDataResult>;

  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = 0;

  constructor() {
    this.gridItems= this.getGridData(
  this.skip,
  this.pageSize,
  this.sortDescriptor,
  this.filterTerm
);
  }

  ngOnInit(): void {

  }

  changeEpisodes(eps:string)
  {
    console.log(eps);
    this.episodes=[];
     let eps_rows:string [] = eps.split('_');

    eps_rows.forEach(episode => {
      this.episodes.push(episode.slice(1,episode.length-1).split(','))
    });
    this.loadGridItems();
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }
  loadGridItems()
  {
    this.gridItems = this.getGridData(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
  }

  public getGridData(
    skip: number,
    pageSize: number,
    sortDescriptor: SortDescriptor[],
    filterTerm: number
  ): Observable<DataResult> {
    let data;
    if (filterTerm) {
      data = process(orderBy( this.episodes, sortDescriptor), {
        filter: {
          logic: "and",
          filters: [
            {
              field: "CategoryID",
              operator: "eq",
              value: filterTerm
            }
          ]
        }
      }).data;
    } else {
      data = orderBy(this.episodes, sortDescriptor);
    }
    return of({
      data: data.slice(skip, skip + pageSize),
      total: data.length
    });
  }
}
