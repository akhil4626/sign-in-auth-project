import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedLogoutService } from '../shared-logout.service';

RouterModule
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private sharedService:SharedLogoutService ) {}

// dashboard.component.ts
signInForm() {
  this.sharedService.logout();
}

}
