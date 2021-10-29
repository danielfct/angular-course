import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';
import { HeroesComponent } from '../components/heroes/heroes/heroes.component';

const routes: Routes = [
  { path: '', component: HeroesComponent }
];

@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyLoadingModule { }
