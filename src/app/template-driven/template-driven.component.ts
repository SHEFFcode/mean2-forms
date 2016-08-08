import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-template-driven',
  template: `
    <h1>Template Driven</h1>
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
      <div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" ngModel name="username">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" ngModel name="email">
        </div>
      </div>
      <div class="form-group">
        <label for="password" >Password</label>
        <input type="password" class="form-control" id="password" ngModel name="password">
      </div>
      <div class="radio">
        <label></label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
  styles: []
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
