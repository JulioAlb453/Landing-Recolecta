import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    /** En el navegador carga el motor de animaciones; en SSR (ngServerMode) usa noop automáticamente */
    provideAnimationsAsync(),
  ],
  bootstrap: [App],
})
export class AppModule {}
