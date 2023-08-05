import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  authUrl ="http://localhost:3000/login"
  createDataInDb(userId: any, password: string, ){
    return this.http.post<any>(this.authUrl, {userId, password });
  }

}
