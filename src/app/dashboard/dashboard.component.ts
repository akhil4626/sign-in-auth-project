import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
RouterModule
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){}
// dashboard.component.ts
signInForm() {
  this.router.navigate(['/']); // Redirect to the logout route
}

}
