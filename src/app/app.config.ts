import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
<<<<<<< HEAD
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
<<<<<<< HEAD
<<<<<<< HEAD
    provideRouter(routes),
    provideHttpClient(),
     provideAnimations(),
        provideToastr({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        }),
=======
    provideRouter(routes)
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
    provideRouter(routes)
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
  ]
};
