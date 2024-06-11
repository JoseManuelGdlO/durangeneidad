import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import player from 'lottie-web';

import { routes } from './app.routes';

import localeEs from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
import { provideLottieOptions } from 'ngx-lottie';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es-MX' },
    provideLottieOptions({
      player: () => player,
    }),
    provideHttpClient(),
    provideToastr(),
    provideAnimations()
  ],

};
