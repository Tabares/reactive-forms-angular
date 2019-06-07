import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-resgister-component',
  templateUrl: './resgister-component.component.html',
  styleUrls: ['./resgister-component.component.css'],
})
export class ResgisterComponentComponent implements OnInit {
  private regex = /\S+@\S+\.\S+/;
  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/homero/i),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/simpson/i),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regex),
    ]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    }),
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm);
    console.warn(this.registerForm.value);
  }

  setRegister() {
    this.registerForm.patchValue({
      firstName: 'Anonymous',
      address: {
        street: '123 Drew Street',
      },
    });
  }
}
