import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import Hero from './../models/Hero'

@Injectable()
export default class HeroService {
	getHeroes(): Promise<Hero[]> {		
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}

	async getHero(id: number) {
		const heroesList = await this.getHeroes();
		return heroesList.find(hero => hero.id === id);
		
	}
}