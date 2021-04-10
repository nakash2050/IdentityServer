import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  private isAuthorizedSubscription: Subscription = new Subscription();
  public isAuthorized = false;

  constructor(private authService: AuthService) {
    this.isAuthorizedSubscription = this.authService.getIsAuthorized().subscribe(
      (isAuthorized: boolean) => {
        this.isAuthorized = isAuthorized;
      });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }
}
