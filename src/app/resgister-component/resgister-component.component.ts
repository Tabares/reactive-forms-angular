import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resgister-component',
  templateUrl: './resgister-component.component.html',
  styleUrls: ['./resgister-component.component.css'],
})
export class ResgisterComponentComponent implements OnInit {
  user = new User('', '', '', '', '');

  constructor() {}

  ngOnInit() {}

  save(resgister: NgForm) {
    console.log(resgister.form);
    console.log('Saved: ' + JSON.stringify(resgister.value));
  }
}
