import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGatewayGuardService, AuthRedirectHandlerComponent } from 'io-routing-auth-library';
import { NoAccessPageComponent } from './no-access-page/no-access-page.component';
import { SignedOutPageComponent } from './signed-out-page/signed-out-page.component';

const routes: Routes = [
  {
    path: 'protected', 
    component: ProtectedComponent,
    canActivate: [AuthGatewayGuardService]
  },
  { path: 'auth', component: AuthRedirectHandlerComponent },
  { path: 'noaccess', component: NoAccessPageComponent },
  { path: 'signedout', component: SignedOutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
