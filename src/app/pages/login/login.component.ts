import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { /* authService:AuthService */ }

  ngOnInit(): void 
  {
    this.authService.login("jose@gmail.com", "123").subscribe(response => 
      {
        console.log(response);
      })
  }

}
