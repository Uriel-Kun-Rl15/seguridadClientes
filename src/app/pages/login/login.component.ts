/* import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  hide = true;

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usuario);
    console.log(password);
    if(usuario == 'admin' && password == '1234'){
      //Lo mandamos al dashboard
      this.router.navigate(['/dashboard/home']);
    }else{
      //mensaje de error
      this.error();
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña invalidos', '', {
      duration:5000, horizontalPosition: 'center', verticalPosition: 'bottom'
    });
  }
} */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void 
  {
    this.authService.login("cssuar@gmail.com", "123").subscribe(response => 
      {
        console.log(response);
      })
  }
  formulario = new FormGroup({correo:new FormControl(''),contrasena:new FormControl('')})

}




/* 

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <div class="container w-100 mt-0 rounded-1 shadow">
            <div class="row">
                <div class="col bg-white p-5 rounded-start"  >
                    <div class="text-sm-start">
                        <h1 class="fw-bold text-lg-start py-5">Inicia sesión</h1>
                        <!--LOGIN-->
                        <form  [formGroup]="form" class="formulario-login" (ngSubmit)="ingresar()">
                            <!-- <mat-form-field class="ancho" appearance="fill"> -->
                              <!-- <mat-label>Usuario</mat-label> -->
                              <input matInput placeholder="usuario@gmail.com" formControlName="usuario">
                            <!-- </mat-form-field><br><br> -->
                            <!-- <mat-form-field class="ancho" appearance="fill"> -->
                                <!-- <mat-label>Contraseña</mat-label> -->
                                <input matInput [type]="hide ? 'password' : 'text'" formControlName="password" value="1234">
                                <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
                                  <!-- <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon> -->
                                </button>
                            <!-- </mat-form-field><br> -->
                            <div class="mb-4 form-check">
                                <input type="checkbox" name="connected" class="form-check-input">
                                <label for="connected" class="form-check-label"> Recordar mi usuario</label>
                            </div><br>
                            <button type="submit" mat-raised-button color="primary" [disabled]="form.invalid" class="ancho btn">Inicia sesión</button><br><br>
                            <div class="my-3">
                                <span>¿Aún no te registras? <a href="/registrotienda">Registra tu tienda</a></span>
                            </div>
                        </form>
                    </div>
                    <!--Termina LOGIN-->
                </div>
                <!--Imagen-->
                <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-8 mt-3 mb-3 ms-3">
                </div>
                <!-- Termina imagen-->
            </div>
        </div>
    </body>
</html> */