import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor
  (
    private http: HttpClient
  ) { AuthService:AuthService }

  login(correo:string, contrasena:string)
  {
    return this.http.post("http://localhost:3000/login", {correo,contrasena})
  }
  
}
