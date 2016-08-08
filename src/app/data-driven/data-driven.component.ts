import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-data-driven',
  template: `
    <p>
      data-driven Works!
    </p>
  `,
  styles: []
})
export class DataDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
