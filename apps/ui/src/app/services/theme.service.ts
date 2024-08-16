import { Injectable, signal } from '@angular/core';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /** The currently applied theme, managed by this component */
  private managedTheme = signal(this.getThemeFromDOM());

  /** The currently applied theme */
  readonly theme = this.managedTheme.asReadonly();

  constructor() {
    // Watch for changes to the body's theme attribute
    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'theme'
        ) {
          this.managedTheme.set(this.getThemeFromDOM());
        }
      });
    }).observe(document.body, { attributes: true });
  }

  /** Sets the theme */
  setTheme(theme: Theme): void {
    return document.body.setAttribute('theme', theme);
  }

  /** Reads the theme from the DOM */
  private getThemeFromDOM(): Theme {
    return document.body.getAttribute('theme') === Theme.LIGHT
      ? Theme.LIGHT
      : Theme.DARK;
  }
}
