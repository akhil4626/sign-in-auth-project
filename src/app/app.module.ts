import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes:Routes = [
  {
    path:'',component:SignInFormComponent
  },
  {
    path:'dashboard',component:DashboardComponent

  },
]
@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    


  ],

  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
