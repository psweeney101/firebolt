import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss',
  animations: [
    trigger('rotatedState', [
      state('true', style({ transform: 'rotate(0deg)' })),
      state('false', style({ transform: 'rotate(-90deg)' })),
      transition('true => false', animate('200ms ease-out')),
      transition('false => true', animate('200ms ease-in')),
    ]),
  ],
})
export class TopnavComponent {
  /** Whether or not the sidenav is opened */
  @Input() sidenavOpened = true;

  /** Fires when the sidenav should be closed or opened */
  @Output() openSidenav = new EventEmitter<boolean>();

  Theme = Theme;

  constructor(public themeService: ThemeService) {}
}
