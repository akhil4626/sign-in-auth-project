import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent {
  userId: any ;
  password: string = '';
  noMatch = false;
  constructor( private http:HttpServiceService,private router:Router){}
  submit(){

  
    this.http.createDataInDb(this.userId,this.password).subscribe({
      next: (data) => {
        this.router.navigate(['/dashboard']); // Redirect to the root route after successful update

      },
      error: (error) => {
          this.noMatch = true
      },
      
    });
    }
  }
