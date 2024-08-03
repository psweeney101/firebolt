import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent],
  template: '<app-navigation></app-navigation>',
})
export class AppComponent {}
