import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    SidenavComponent,
    TopnavComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  /** Whether or not the sidenav is opened */
  get sidenavOpened(): boolean {
    return this._sidenavOpened;
  }

  /** Whether or not the sidenav is opened */
  private _sidenavOpened = true;

  /** Open or close the sidenav */
  openSidenav(opened = !this.sidenavOpened): void {
    this._sidenavOpened = opened;
  }
}
