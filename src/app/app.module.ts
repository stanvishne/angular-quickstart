import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule} from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import AppRoutingModule from './app-routing.module';

import AppComponent from './app.component';
import HeroDetailComponent from './components/heroDetails/hero-detail.component';
import HeroesList from './components/heroesList/heroes-list.component';
import DashBoardComponent from './components/dashboard/dashboard.components';
import HeroSearchComponent from './components/heroSearch/hero-search.component';
import HeroService from './services/hero.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule , 
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesList, DashBoardComponent, HeroSearchComponent ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
