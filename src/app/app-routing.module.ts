import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import HeroDetailComponent from './components/heroDetails/hero-detail.component';
import HeroesList from './components/heroesList/heroes-list.component';
import DashBoardComponent from './components/dashboard/dashboard.components';

const routes: Routes = [
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
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export default class AppRoutingModule {}

