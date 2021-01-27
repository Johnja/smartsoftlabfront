import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { LoginService } from '../../services/login.service';

//SweetAlert
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  //Validador de email

  public emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //Formulario de login

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit(): void {
  }

  loginUser() {

    //Verifica que el formulario es valido

    if (this.loginForm.invalid) {

      Swal.fire('Error', "Verifique los datos ingresados", 'error');
      return;
    } else {

      this.loginService.login(this.loginForm.value)
        .subscribe(resp => {
          this.loginService.validateTokenServer();
          this.router.navigateByUrl('/');

        }, (err) => {
          Swal.fire('Error', "Verifique los datos ingresados", 'error');
        });
    }
  }
}

