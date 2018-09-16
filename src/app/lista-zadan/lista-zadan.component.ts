import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-lista-zadan',
  templateUrl: './lista-zadan.component.html',
  styleUrls: ['./lista-zadan.component.scss']
})
export class ListaZadanComponent implements OnInit {

  constructor(private renderer2: Renderer2) { }
  ngOnInit() {
  }
  categories = [
    {
      name: 'Animacje', children: [
        { name: 'Zmiana koloru' },
        { name: 'Zmiana opacity' }
      ]
    },
    {
      name: 'Observable', children: [
        { name: 'Zegarek z jednego observablesa' },
        { name: '3 Observablesy' }
      ]
    }
  ]

  expand(categorySource: MouseEvent) {
    if (categorySource.srcElement.tagName === "UL") {
      const exerciseList: HTMLCollection = categorySource.srcElement.children;
      const actualDisplay = getComputedStyle(exerciseList[0]).display;
      for (let i = 0; i < exerciseList.length; i++) {
        if (actualDisplay !== 'block') {
          this.renderer2.setStyle(exerciseList[i], 'display', 'block');
        }
        else {
          this.renderer2.setStyle(exerciseList[i], 'display', 'none')
        }
      }
    }
  }

}
