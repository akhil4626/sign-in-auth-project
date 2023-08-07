import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedLogoutService {

  constructor(private router: Router) {}
  logout() {
    // Redirect to the sign-in form page
    this.router.navigate(['/']);
  }

}
