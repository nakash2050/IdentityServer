import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    this.authService.initAuth();
  }

  ngOnDestroy() {
    this.authService.ngOnDestroy();
  }
}
