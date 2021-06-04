import { Component } from '@angular/core';

import '../web_components/cozy-button-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-react-webcomponent-vanilla';
  disabled = false;

  onCozyClick() {
    console.log('click from angular');
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}
