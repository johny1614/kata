import { Component, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-lista-zadan',
  templateUrl: './lista-zadan.component.html',
  styleUrls: ['./lista-zadan.component.scss']
})
export class ListaZadanComponent implements OnInit {
  @ViewChildren('categories') categoriesDOM;
  @ViewChild('exercises') exercisesDOM;
  constructor(private renderer2: Renderer2) { }
  ngOnInit() {
  }
  categories = [
    {
      name: 'Animacje', exercises: [
        { name: 'Czysty css - animation', routerLink: '/Animacje-1/czysty-css' },
        { name: 'Czysty css - transition', routerLink: '/Animacje-2/transition' },
        { name: 'Angular animations', routerLink: '/Animacje-3/angular-animations' }
      ]
    },
    {
      name: 'Observablesy', exercises: [
        { name: 'Observablesy - part1',routerLink:'/Observables/Part1'}
      ]
    },
    {
      name:'Angular forms',exercises:[
        {name: 'Walidacja',routerLink:'/Angular-Forms-1/Walidacja'}
      ]
    },
    {
      name: 'TypeScript', exercises: [
        { name: 'Typy', routerLink: '/Typescipt/typy' },
      ]
    },

  ]
}
