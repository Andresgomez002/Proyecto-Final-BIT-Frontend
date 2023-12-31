import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { MiListaComponent } from './pages/mi-lista/mi-lista.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { HistoryComponent } from './pages/history/history.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  /** Define la ruta de los dos modulos usando carga perezosa */
  
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent
    
  },
  {
    path: 'planes',
    component: PlanesComponent
    
  },
  {
    path: 'miLista',
    component: MiListaComponent
    
  },
  {
    path: 'product/:id',
    component: DetailProductComponent

    
  },
  {
    path: 'history',
    component: HistoryComponent

    
  },
  {
    path: 'news',
    component: NewsComponent

    
  },
  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module' )
      .then( module => module.AuthModule )
  },
  {
    path: 'dashboard',
    loadChildren: () => import( './protected/protected.module' )
      .then( module => module.ProtectedModule )
  },
 
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
