import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RtcNepaliDatePickerModule } from '@rishovt/angular-nepali-datepicker';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    FormsModule,
    ReactiveFormsModule,
    RtcNepaliDatePickerModule
    
   
  ]
};
