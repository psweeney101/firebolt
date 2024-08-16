import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  signal,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerDiem } from '@firebolt/shared';
import { PerDiemService } from '../services/per-diem.service';

interface Filter {
  search: string;
  showInactive: boolean;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSlideToggle,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit {
  /** Table sort to attach to the dataSource */
  @ViewChild(MatSort) sort?: MatSort;

  /** Table paginator to attach to the dataSource */
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  /** Table's data source */
  dataSource = new MatTableDataSource<PerDiem>();

  /** Columns displayed in the table */
  displayedColumns: (keyof PerDiem)[] = [
    'country',
    'location',
    'lodging',
    'meals_and_incidentals',
    'per_diem',
    'season_start_date',
    'season_end_date',
  ];

  /** The value of the search box */
  search = signal('');

  /** Whether or not to only show active rates */
  showInactive = signal(false);

  /** Whether or not the table is compact */
  compact = signal(true);

  constructor(perDiemService: PerDiemService) {
    // Keep table updated with rates
    effect(() => {
      this.dataSource.data = perDiemService.items();
    });
    // Fires when the filter changes
    effect(() => {
      const filter: Filter = {
        search: this.search(),
        showInactive: this.showInactive(),
      };
      this.dataSource.filter = JSON.stringify(filter);
    });
    // Setup filtering
    this.dataSource.filterPredicate = (row, rawFilter) => {
      const filter: Filter = JSON.parse(rawFilter);

      if (!this.showInactive()) {
        const today = new Date();
        const isActive =
          new Date(row.season_start_date) < today &&
          new Date(row.season_end_date) > today;
        if (!isActive) return false;
      }

      const trim = (str: string): string => str.toLowerCase().trim();
      const search = trim(filter.search);
      return (
        trim(row.country).includes(search) ||
        trim(row.location).includes(search)
      );
    };
  }

  ngAfterViewInit(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
