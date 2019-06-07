import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-resgister-component',
  templateUrl: './resgister-component.component.html',
  styleUrls: ['./resgister-component.component.css'],
})
export class ResgisterComponentComponent implements OnInit {
  name = new FormControl('');
  constructor() {}

  ngOnInit() {}

  updateName() {
    console.log(this.name);

    this.name.setValue('Jose Emmanuel');
  }
}
