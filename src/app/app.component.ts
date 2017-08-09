import { Component, OnInit } from '@angular/core';
import Hero from './models/Hero';
import HeroService from './services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService] 
})
export class AppComponent implements OnInit { 
  constructor(private heroService: HeroService) {}

   title = 'Tour of Heroes';
   heroes: Hero[];
   selectedHero: Hero;
    ngOnInit(): void {
      this.getHeroes();   
    }
   getHeroes(): void {
     this.heroes = this.heroService.getHeroes();
     this.selectedHero = this.heroes[0];
   }
 }

 
