import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  register = {
    name: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onRegister() {
    console.log(this.register);
  }

}
