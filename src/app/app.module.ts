import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';
import AppComponent from './app.component';
import HeroDetailComponent from './components/heroDetails/hero-detail.component';
import HeroesList from './components/heroesList/heroes-list.component';
import DashBoardComponent from './components/dashboard/dashboard.components';
import HeroService from './services/hero.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule, RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesList
      },
      {
        path: 'dashboard',
        component: DashBoardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ]) 
  ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesList, DashBoardComponent ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
