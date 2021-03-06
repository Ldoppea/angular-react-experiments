import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-wrap-react';
  disabled = false;

  onCozyClick() {
    console.log('click from angular');
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}
