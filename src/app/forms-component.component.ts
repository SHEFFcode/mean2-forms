import { Component, OnInit } from '@angular/core';
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";

@Component({
  moduleId: module.id,
  selector: 'app-forms-component',
  templateUrl: 'forms-component.component.html',
  styles: [],
  directives: [TemplateDrivenComponent]
})
export class FormsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
