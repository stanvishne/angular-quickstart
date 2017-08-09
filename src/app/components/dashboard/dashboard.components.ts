import {Component, OnInit} from '@angular/core';
import Hero from '../../models/hero';
import HeroService from '../../services/hero.service';


@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html'
})

export default class DashboardComponent implements OnInit{
	heroes: Hero[] = [];

	constructor(private heroService: HeroService) {}

	ngOnInit(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
	}
}
