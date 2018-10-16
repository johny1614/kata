import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ControlContainer} from '@angular/forms'; //Needed for formGroup
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-walidacja-rozwiazanie',
  templateUrl: './walidacja-rozwiazanie.component.html',
  styleUrls: ['./walidacja-rozwiazanie.component.scss']
})
export class WalidacjaRozwiazanieComponent implements OnInit {
  // @ViewChild('f1') form1:NgForm;
  reactive6form: FormGroup;
  reactive7form: FormGroup;
  reactive8form: FormGroup;

  onSubmit1(form: NgForm) {
    console.log('dziala - nasz ngForm to:', form);
    console.log(form.valid);
  }

  onSubmit2(form) {
    console.log('dziala onSubmit2', form);
  }

  onSubmit3(form) {
    console.log('dziala onSubmit3', form);
  }

  changeValue(form3: NgForm) {
    form3.form.patchValue({firstInput: 'ahahahahhaha wstawione!'});
  }

  resetForm(form5: NgForm) {
    console.log('reseet');
    form5.form.reset();
  }

  ngOnInit() {
    this.reactive6form = new FormGroup({
     'userData': new FormGroup({
        'username': new FormControl('Michal', Validators.required),
        'email': new FormControl('johny@o2.pl', [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('Male as fck')
    });
    this.reactive7form = new FormGroup({
      'username': new FormControl('InitValue', Validators.required)
    });
    this.reactive8form = new FormGroup({
      'hobbies': new FormArray([])
    })
  }
  addHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.reactive8form.get('hobbies')).push(control);
  }
}
