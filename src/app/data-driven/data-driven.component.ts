import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-data-driven',
  template: `
    <h1>Data Driven</h1>
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" formControlName="username">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" formControlName="email">
        </div>
      </div>
      <div class="form-group">
        <label for="password" >Password</label>
        <input type="password" class="form-control" id="password" formControlName="password">
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender">
        </label>
      </div>
      <div>
        <h3>Hobbies</h3>
        <div class="form-group">
        <input type="text" class="form-control">
        </div>
      </div>
      <button type="submit" class="btn btn-default">Add Hobby</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
  styles: [],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      username:   new FormControl(),
      email:      new FormControl(),
      password:   new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
