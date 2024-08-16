import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  /** Whether or not the sidenav is opened */
  @Input() opened = true;

  /** List of links */
  readonly links: { name: string; icon: string; href: string }[] = [
    { name: 'Table', icon: 'table_chart', href: '/table' },
    { name: 'Form', icon: 'edit_note', href: '/form' },
  ];

  constructor(private router: Router) {}

  /** Determines if a link is active or not */
  isActive(link: (typeof this.links)[0]): boolean {
    return this.router.isActive(link.href, {
      fragment: 'exact',
      paths: 'exact',
      matrixParams: 'exact',
      queryParams: 'ignored',
    });
  }
}
