import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedLogoutService } from '../shared-logout.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule

  ],
  providers:[SharedLogoutService]
})
export class DashboardModule { }
