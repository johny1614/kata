import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-walidacja-rozwiazanie',
  templateUrl: './walidacja-rozwiazanie.component.html',
  styleUrls: ['./walidacja-rozwiazanie.component.scss']
})
export class WalidacjaRozwiazanieComponent {
  // @ViewChild('f1') form1:NgForm;
  onSubmit1(form){
    console.log('dziala',form)
    console.log(form.valid)
  }
  onSubmit2(form){
    console.log('dziala onSubmit2',form)
  }
  onSubmit3(form){
    console.log('dziala onSubmit3',form)
  }
  changeValue(form3:NgForm){
    form3.form.patchValue({firstInput:'ahahahahhaha wstawione!'})
  }
  resetForm(form5:NgForm){
    console.log('reseet')
    form5.form.reset();
  }
}
