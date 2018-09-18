import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-kategoria',
  templateUrl: './kategoria.component.html',
  styleUrls: ['./kategoria.component.scss']
})
export class KategoriaComponent implements OnInit {
  @Input() exercises;
  @Input() name:String;
  expanded:Boolean=false;
  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
  }

}
