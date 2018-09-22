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
import { TypyComponent } from './typescript/typy/typy.component';
import { TypyProbaComponent } from './typescript/typy/proba/proba.component';
import { TypyRozwiazanieComponent } from './typescript/typy/rozwiazanie/rozwiazanie.component';
import { TransitionComponent } from './animacje/transition/transition.component';
import { TransitionProbaComponent } from './animacje/transition/proba/proba.component';
import { TransitionRozwiazanieComponent } from './animacje/transition/rozwiazanie/rozwiazanie.component';
/* Glowny
 <a style="margin-right: 10px" routerLink="./proba">Próba</a>
 <a routerLink="./rozwiazanie">Rozwiązanie</a> 
 Proba/Rozw
<a routerLink="./..">Cofnij</a>


 */

const appRoutes: Routes = [
  { path: '', component: ListaZadanComponent },
  { path: 'Animacje-1/czysty-css', component: CzystyCssComponent },
  { path: 'Animacje-1/czysty-css/rozwiazanie', component: ZmianaKoloruRozwiazanieComponent },
  { path: 'Animacje-1/czysty-css/proba', component: ZmianaKoloruProbaComponent },
  { path: 'Animacje-2/transition', component: TransitionComponent },
  { path: 'Animacje-2/transition/rozwiazanie', component: TransitionRozwiazanieComponent },
  { path: 'Animacje-2/transition/proba', component: TransitionProbaComponent },
  { path: 'Angular-Forms-1/Walidacja', component: WalidacjaComponent },
  { path: 'Angular-Forms-1/Walidacja/rozwiazanie', component: WalidacjaRozwiazanieComponent },
  { path: 'Angular-Forms-1/Walidacja/proba', component: WalidacjaProbaComponent },
  { path: 'Typescipt/typy', component: TypyComponent },
  { path: 'Typescipt/typy/rozwiazanie', component: TypyRozwiazanieComponent },
  { path: 'Typescipt/typy/proba', component: TypyProbaComponent },

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
    WalidacjaProbaComponent,
    TypyComponent,
    TypyProbaComponent,
    TypyRozwiazanieComponent,
    TransitionComponent,
    TransitionProbaComponent,
    TransitionRozwiazanieComponent,
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
