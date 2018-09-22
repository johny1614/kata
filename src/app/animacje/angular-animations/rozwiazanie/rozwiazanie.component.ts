import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-rozwiazanie',
  templateUrl: './rozwiazanie.component.html',
  styleUrls: ['./rozwiazanie.component.scss'],
  animations: [
    trigger('first', [
      state('default', style({
        'background-color': 'purple'
      })),
      state('clicked', style({
        'background-color': 'yellow'
      }))
    ]),
    trigger('second', [
      state('default', style({
        'background-color': 'purple'
      })),
      state('clicked', style({
        'background-color': 'yellow'
      })),
      transition('default->clicked', animate('400ms'))
    ]),
    trigger('third', [
      state('default', style({
        'background-color': 'purple'
      })),
      state('clicked', style({
        'background-color': 'yellow'
      })),
      transition('default->clicked', animate('400ms')),
      transition('clicked->default', animate('400ms'))
    ]),
    trigger('fourth', [
      state('default', style({
        'background-color': 'purple'
      })),
      state('clicked', style({
        'background-color': 'yellow'
      })),
      state('mouseDown',style({
        'background-color':'black'
      })),
      transition('default->mouseDown', animate('400ms')),
      transition('mouseDown->clicked', animate('400ms')),
      transition('default->clicked', animate('400ms')),
      transition('clicked->default', animate('400ms'))
    ]),
    trigger('fifth', [
      state('default', style({
      })),
      state('clicked', style({
        'background-color': 'yellow',
        'border':'5px solid blue'
      })),
      transition('default->clicked',[style({'border':'5px solid blue'}),animate('2000ms')]),
    ]),
    trigger('sixth',[
      transition('* => *',[
        animate(1500,style({'width':'600px'})),
        animate(900,style({'width':'200px'})),
        animate(1000,style({'width':'*'}))
      ]
    )
    ])
  ]
})
export class AngularAnimationsRozwiazanieComponent implements OnInit {
  animate = false;
  firstState = 'default';
  secondState = 'default';
  thirdState = 'default';
  fourthState='default';
  fifthState='default';
  sixthState='default';
  constructor() { }

  ngOnInit() {
  }

}
