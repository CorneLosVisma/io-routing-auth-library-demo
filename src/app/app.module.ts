import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { AUTHGATEWAYCONFIG, IAuthGatewayConfig, AuthGatewayInterceptor, AUTH_SERVICES, AuthService } from 'io-routing-auth-library';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoAccessPageComponent } from './no-access-page/no-access-page.component';
import { SignedOutPageComponent } from './signed-out-page/signed-out-page.component';

const myAuthGatewayConfig: IAuthGatewayConfig = {
  testJwt: null,
  gateWayUrl: 'https://authentication-dev.intraofficesigning.com/acme-dev',    
  returnUrl: '', // Keep this value empty for production
  aud: 'io-acme-dev', 
  tenant: 'acme', 
  roles: ['supervisor'],  
  includeUrls: ['https://myProtectedApi.azurewebsites.net'] // List of external url's that are protected and need a valid Gateway JWT
};

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    NoAccessPageComponent,
    SignedOutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: AUTHGATEWAYCONFIG, useValue: myAuthGatewayConfig },
    { provide: AUTH_SERVICES, useClass: AuthService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthGatewayInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
