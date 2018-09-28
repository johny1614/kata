import {Component, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-rozwiazanie-observables-part1',
  templateUrl: './rozwiazanie.component.html',
  styleUrls: ['./rozwiazanie.component.scss']
})
export class ObservablesPart1RozwiazanieComponent implements OnInit {
  private myBehaviorSubject = new BehaviorSubject<number>(0);
  myBehaviorSubject$: Observable<number> = this.myBehaviorSubject.asObservable();
  myBehaviorSubscription: Subscription = null;

  nextMyBehaviourSubject() {
    const actualValue = this.myBehaviorSubject.getValue();
    this.myBehaviorSubject.next(actualValue + 1);
  }

  constructor() {
  }

  ngOnInit() {
    //zamiast myBehaviorSubject mozemy dac myBehaviorSubject$ - to jest chyba nawet dobra praktyka, bo ten suffix $ oznacza observablesa
    this.myBehaviorSubscription = this.myBehaviorSubject.subscribe((data) => {
      console.log('Subscription!', data);
    });

  }

}
