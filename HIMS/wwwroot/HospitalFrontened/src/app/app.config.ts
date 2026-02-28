import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RtcNepaliDatePickerModule } from '@rishovt/angular-nepali-datepicker';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { AsyncPipe, CommonModule } from '@angular/common';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimations(),
    AsyncPipe,
    provideToastr({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    provideHttpClient(),
    FormsModule,
    ReactiveFormsModule,
    RtcNepaliDatePickerModule,
    CommonModule
    
  ],
};
