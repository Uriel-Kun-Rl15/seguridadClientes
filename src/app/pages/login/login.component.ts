import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private authService:AuthService, ) {
    
   }

   ngOnInit(): void 
   {
     this.authService.login("jose@gmail.com", "123").subscribe(response => 
       {
         console.log(response);
       })
   }

 

  

 
}
