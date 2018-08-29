import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSocialLoginModuleModule, AuthServiceConfig, GoogleLoginProvider } from 'ng-social-login-module';
import { SOCIAL_CONFIG_KEYS } from './social.config';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(SOCIAL_CONFIG_KEYS.GOOGLE)
  }
], true);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSocialLoginModuleModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
