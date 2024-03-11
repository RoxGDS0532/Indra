import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {PaisService} from './services/pais.service';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),PaisService]
};
