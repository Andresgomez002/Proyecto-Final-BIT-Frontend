import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/partial/header/header.component';
import { FooterComponent } from './component/partial/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GuardadasComponent } from './pages/guardadas/guardadas.component';
import { SearchComponent } from './pages/search/search.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { MiListaComponent } from './pages/mi-lista/mi-lista.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { HistoryComponent } from './pages/history/history.component';
import { NewsComponent } from './pages/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GuardadasComponent,
    SearchComponent,
    PlanesComponent,
    MiListaComponent,
    DetailProductComponent,
    HistoryComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
