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
        { name: 'Czysty css - transition', routerLink: '/Animacje-2/czysty-css-transition' }
      ]
    },
    {
      name: 'Observable', exercises: [
        { name: 'Zegarek z jednego observablesa' },
        { name: '3 Observablesy' }
      ]
    },
    {
      name:'Angular forms',exercises:[
        {name: 'Walidacja',routerLink:'/Angular-Forms-1/Walidacja'}
      ]
    }
  ]

  expand(categorySource: MouseEvent) {
    // console.log(categorySource.srcElement)
    console.log('kategorie',this.categoriesDOM)
    console.log('exercises',this.exercisesDOM)
    
    // console.log(categorySource.srcElement.tagName);
    // console.log(categorySource.srcElement.children);
    // con
    // if (categorySource.srcElement.tagName !== "LI") {
    //   const exerciseList: HTMLCollection = categorySource.srcElement.children;
    //   const actualDisplay = getComputedStyle(exerciseList[0]).display;
    //   for (let i = 0; i < exerciseList.length; i++) {
    //     if (actualDisplay !== 'block') {
    //       this.renderer2.setStyle(exerciseList[i], 'display', 'block');
    //     }
    //     else {
    //       this.renderer2.setStyle(exerciseList[i], 'display', 'none')
    //     }
    //   }
    // }
  }

}
