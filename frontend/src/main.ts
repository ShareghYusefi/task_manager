import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// Step 1: Main.ts file is run when application starts
// Step 2: AppModule is initiated/bootstrapped
// Step 3: The AppModule bootstraps the AppComponent & creating an instance of it
// Step 4: DOM is generated & content of app component renders
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
