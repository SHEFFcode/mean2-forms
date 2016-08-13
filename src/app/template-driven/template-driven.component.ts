import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-template-driven',
  template: `
    <h1>Template Driven</h1>
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
      <div ngModelGroup="userData">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" [(ngModel)]="user.username" name="username" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" [(ngModel)]="user.email" name="email" required>
        </div>
      </div>
      <div class="form-group">
        <label for="password" >Password</label>
        <input type="password" class="form-control" id="password" [(ngModel)]="user.password" name="password" required>
      </div>
      <div class="radio">
        <label></label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
  styles: [`
    .ng-invalid {
    border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {

  user: any = {
    username: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.user);
  }

}
