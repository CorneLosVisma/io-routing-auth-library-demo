import { Component } from '@angular/core';
import { AuthHandler, UserInfo } from 'io-routing-auth-library';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent {
  userInfo: UserInfo | null = null;

  constructor(private authHandler: AuthHandler) { 
    this.authHandler.onUserInfoSet().subscribe((userInfo: UserInfo | null) => {
      this.userInfo = userInfo;
    });    
  }

  logout() {
    this.authHandler.logoff();
  }
}
