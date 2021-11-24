import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageComponent } from './components/page-component/page.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search-component/search.component';
import { SeasonsComponent } from './components/seasons-component/seasons.component';
import { EpisodesComponent } from './components/episodes-component/episodes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    SearchComponent,
    SeasonsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
