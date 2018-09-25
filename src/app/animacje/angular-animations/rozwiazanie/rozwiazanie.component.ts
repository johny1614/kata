import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate, group, keyframes, query} from '@angular/animations';

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
      state('mouseDown', style({
        'background-color': 'black'
      })),
      transition('default->mouseDown', animate('400ms')),
      transition('mouseDown->clicked', animate('400ms')),
      transition('default->clicked', animate('400ms')),
      transition('clicked->default', animate('400ms'))
    ]),
    trigger('fifth', [
      state('default', style({})),
      state('clicked', style({
        'background-color': 'yellow',
        'border': '5px solid blue'
      })),
      transition('default->clicked', [style({'border': '5px solid blue'}), animate('2000ms')]),
    ]),
    trigger('sixth', [
      transition('* => *', [
          animate(1500, style({'width': '600px'})),
          animate(900, style({'width': '200px'})),
          animate(1000, style({'width': '*'}))
        ]
      )
    ]),
    trigger('seventh', [
      transition('default => clicked', [
          group([
            animate(2000, style({'width': '600px'})),
            animate(700, style({'background-color': 'green'}))
          ])
        ]
      )
    ]),
    trigger('eigth',
      [
        transition('default->clicked', animate('6000ms', keyframes([
          style({'background-color': 'blue', 'offset': 0.1}),
          style({'background-color': 'pink', 'offset': 0.8}),
          style({'background-color': 'yellow', 'offset': 0.9}),
          style({'background-color': 'red', 'offset': 1}),
        ])))
      ]),
    trigger('nineth', [
      transition('default->clicked', [
        query('.first', [
          style({'transform': 'translateY(-200px)'}),
          animate('300ms', style({'transform': 'translateY(0px)'}))
        ]),
        query('.second', [
          style({'transform': 'translateX(200px)'}),
          animate('300ms', style({'transform': 'translateX(0px)'}))
        ])
      ])
    ]),
    trigger('tenth', [
      transition('default->clicked', [
        group([
            query('.first', [
              style({'transform': 'translateY(-200px)'}),
              animate('300ms', style({'transform': 'translateY(0px)'}))
            ]),
            query('.second', [
              style({'transform': 'translateX(200px)'}),
              animate('300ms', style({'transform': 'translateX(0px)'}))
            ])
          ]
        )
      ])
    ]),
    trigger('eleventh', [
      transition('*->*', [
        // style(transform:'')
        animate(1000, style({transform: 'rotate({{numberOfRotates}}deg)'}))
      ])
    ])

  ]
})
export class AngularAnimationsRozwiazanieComponent implements OnInit {
  animate = false;
  firstState = 'default';
  secondState = 'default';
  thirdState = 'default';
  fourthState = 'default';
  fifthState = 'default';
  sixthState = 'default';
  seventhState = 'default';
  eigthState = 'default';
  ninethState = 'default';
  tenthState = 'default';
  eleventhState = 'default';
  numberOfRotates = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
