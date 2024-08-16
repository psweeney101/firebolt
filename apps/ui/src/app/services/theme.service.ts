import { Injectable } from '@angular/core';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /** The currently applied theme */
  get theme(): Theme {
    return this._theme;
  }

  /** Controlled by the mutation observer */
  private _theme = Theme.DARK;

  constructor() {
    // Watch for changes to the body's theme attribute
    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'theme'
        ) {
          this._theme =
            document.body.getAttribute('theme') === Theme.LIGHT
              ? Theme.LIGHT
              : Theme.DARK;
        }
      });
    }).observe(document.body, { attributes: true });
  }

  /** Updates the theme */
  setTheme(theme: Theme): void {
    document.body.setAttribute('theme', theme);
  }
}
