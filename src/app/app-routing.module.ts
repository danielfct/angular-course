import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from './components/apod/apod/apod.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { FormComponent } from './components/form/form/form.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
    { path: 'calculator', component: CalculatorComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'apod', component: ApodComponent },
    { path: 'forms', component: FormComponent },
    { path: 'beers', component: BeersComponent, canActivate: [GuardGuard] },
    { path: 'lazy-loading', loadChildren: () => import('./lazyloading/lazy-loading.module').then(m => m.LazyLoadingModule) },
    { path: 'trivia', component: TriviaComponent },
    { path: '', redirectTo: '/forms', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }