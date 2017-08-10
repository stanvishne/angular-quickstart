import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Hero from '../..//models/Hero';
import HeroService from '../../services/hero.service';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
  providers: [HeroService] 
})
export default class HeroesList implements OnInit { 
  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

   title = 'Tour of Heroes';
   heroes: Hero[];
   selectedHero: Hero;
  ngOnInit(): void {
    this.getHeroes();   
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;       
    });    
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return}
    this.heroService.create(name)
      .then(() => {
        this.getHeroes();
        this.selectedHero = null;
      })
  }
  
  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.getHeroes();
        this.selectedHero = null;
      })
  }
 }

 
