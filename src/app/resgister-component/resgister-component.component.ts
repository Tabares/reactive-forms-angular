import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resgister-component',
  templateUrl: './resgister-component.component.html',
  styleUrls: ['./resgister-component.component.css'],
})
export class ResgisterComponentComponent implements OnInit {
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
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
