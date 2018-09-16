import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ZmianaKoloruComponent } from './animacje/zmiana-koloru/zmiana-koloru.component';
import { ZmianaKoloruRozwiazanieComponent } from './animacje/zmiana-koloru/rozwiazanie/rozwiazanie.component';
import { ZmianaKoloruProbaComponent } from './animacje/zmiana-koloru/proba/proba.component';
import { ListaZadanComponent } from './lista-zadan/lista-zadan.component';
const appRoutes: Routes = [
  { path: '', component: ListaZadanComponent },
  { path: 'Animacje-1/zmiana-koloru', component: ZmianaKoloruComponent },
  { path: 'Animacje-1/zmiana-koloru/rozwiazanie', component: ZmianaKoloruRozwiazanieComponent },
  { path: 'Animacje-1/zmiana-koloru/proba', component: ZmianaKoloruProbaComponent },
  // { path: '**', component: AppComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ZmianaKoloruComponent,
    ZmianaKoloruRozwiazanieComponent,
    ZmianaKoloruProbaComponent,
    ListaZadanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
