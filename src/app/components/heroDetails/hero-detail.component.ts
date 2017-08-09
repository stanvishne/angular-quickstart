import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import HeroService from '../../services/hero.service';
import 'rxjs/add/operator/switchMap';

import Hero from '../../models/Hero';

@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html'
})

export default class HeroDetailComponent implements OnInit {
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
			.subscribe(hero => this.hero = hero)
	}
	
	goBack(): void {
		this.location.back();
	}
	
	@Input() hero: Hero
}