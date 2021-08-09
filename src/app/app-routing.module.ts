import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EachBodyPage } from './each-body/each-body.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'all-bodies',
    loadChildren: () => import('./all-bodies/all-bodies.module').then( m => m.AllBodiesPageModule)
  },
  {
    path: 'each-body/:id', component: EachBodyPage
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourites/favourites.module').then( m => m.FavouritesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
