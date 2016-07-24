import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { HeroDetailComponent } from './hero-detail';
import { HeroesComponent } from './heroes';

const routes : RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
];

export const appRouterProviders = [
  provideRouter(routes),
];
