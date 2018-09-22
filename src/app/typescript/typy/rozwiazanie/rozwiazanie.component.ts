import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rozwiazanie',
  templateUrl: './rozwiazanie.component.html',
  styleUrls: ['./rozwiazanie.component.scss']
})
export class TypyRozwiazanieComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  tupluj(){
    let mytuple = [10, "Hello", "World", "typeScript"];
    console.log(mytuple);
    mytuple.push(88)
    console.log('Jak widać moglismy cos dodac!',mytuple)
    mytuple[2]="zmienione!!!!!!!!"
    console.log('Albo zmienic',mytuple)
    mytuple=[10, "Nowka", "World", "typeScript"];
    console.log('albo w ogole od nowa',mytuple)
    type tupleType=[string,number]
    let typedTuple:tupleType=['Miszcz',44]
    console.log(typedTuple)
    typedTuple.push('a to wejdzie?')
    console.log(typedTuple)
    console.log('ale jak nie moge stworzyc tupla:')
    console.log('type tupleType=[string,number];')
    console.log("let badTuple:tupleType=[33,'gunwo']")
    type ColorType = [string, number, number, number];
let red: ColorType = ['Red', 1, 0, 0];
red.push('wtf')
console.log(red)
    // let badTuple:tupleType=[33,'gunwo']
    // console.log(badTuple)
  }
}
