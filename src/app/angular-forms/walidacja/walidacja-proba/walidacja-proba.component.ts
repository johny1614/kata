import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walidacja-proba',
  templateUrl: './walidacja-proba.component.html',
  styleUrls: ['./walidacja-proba.component.scss']
})
export class WalidacjaProbaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit1(){
    console.log('onSubmit1');
  }

}
