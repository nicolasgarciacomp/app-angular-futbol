import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClubesComponent } from './components/clubes/clubes.component';
import { ClubComponent } from './components/club/club.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'clubes', component: ClubesComponent},
	{path: 'club/:id', component: ClubComponent},
	{path: 'buscar/:termino', component: BuscadorComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
