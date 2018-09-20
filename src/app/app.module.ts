import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CzystyCssComponent } from './animacje/zmiana-koloru/czysty-css.component';
import { ZmianaKoloruRozwiazanieComponent } from './animacje/zmiana-koloru/rozwiazanie/rozwiazanie.component';
import { ZmianaKoloruProbaComponent } from './animacje/zmiana-koloru/proba/proba.component';
import { ListaZadanComponent } from './lista-zadan/lista-zadan.component';
import { KategoriaComponent } from './lista-zadan/kategoria/kategoria.component';
import { WalidacjaComponent } from './angular-forms/walidacja/walidacja.component';
import { WalidacjaRozwiazanieComponent } from './angular-forms/walidacja/walidacja-rozwiazanie/walidacja-rozwiazanie.component';
import { WalidacjaProbaComponent } from './angular-forms/walidacja/walidacja-proba/walidacja-proba.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
const appRoutes: Routes = [
  { path: '', component: ListaZadanComponent },
  { path: 'Animacje-1/czysty-css', component: CzystyCssComponent },
  { path: 'Animacje-1/czysty-css/rozwiazanie', component: ZmianaKoloruRozwiazanieComponent },
  { path: 'Animacje-1/czysty-css/proba', component: ZmianaKoloruProbaComponent },
  { path: 'Angular-Forms-1/Walidacja', component: WalidacjaComponent },
  { path: 'Angular-Forms-1/Walidacja/rozwiazanie', component: WalidacjaRozwiazanieComponent },
  { path: 'Angular-Forms-1/Walidacja/proba', component: WalidacjaProbaComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    CzystyCssComponent,
    ZmianaKoloruRozwiazanieComponent,
    ZmianaKoloruProbaComponent,
    ListaZadanComponent,
    KategoriaComponent,
    WalidacjaComponent,
    WalidacjaRozwiazanieComponent,
    WalidacjaProbaComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
