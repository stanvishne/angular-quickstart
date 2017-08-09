import { Component, OnInit } from '@angular/core';
import Hero from '../..//models/Hero';
import HeroService from '../../services/hero.service';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
  providers: [HeroService] 
})
export default class HeroesList implements OnInit { 
  constructor(private heroService: HeroService) {}

   title = 'Tour of Heroes';
   heroes: Hero[];
   selectedHero: Hero;
    ngOnInit(): void {
      this.getHeroes();   
    }
   getHeroes(): void {
     this.heroService.getHeroesSlowly().then(heroes => {
       this.heroes = heroes;
       this.selectedHero = this.heroes[0];
     });
     
   }
 }

 
