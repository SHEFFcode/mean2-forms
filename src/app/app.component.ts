import { Component } from '@angular/core';
import {FormsComponentComponent} from "./forms-component.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FormsComponentComponent]
})
export class AppComponent {
  title = 'app works!';
}
