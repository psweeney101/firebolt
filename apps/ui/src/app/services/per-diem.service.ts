import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { PerDiem } from '@firebolt/shared';

@Injectable({
  providedIn: 'root',
})
export class PerDiemService {
  items = signal<PerDiem[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<PerDiem[]>('/api/per-diem').subscribe((items) => {
      this.items.set(PerDiemService.sort(items));
    });
  }

  static sort(items: PerDiem[]): PerDiem[] {
    return items.sort((a, b) => a.country.localeCompare(b.country));
  }
}
