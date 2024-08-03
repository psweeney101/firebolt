import { TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation/navigation.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
    }).compileComponents();
  });
});
