import "hammerjs";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

// Loading UI/UX
import "src/assets/ts/client/base";
import "src/assets/ts/admin/base";
console.log(`process.env.MONGODB_URL: ${process.env.NODE_ENV}`);
