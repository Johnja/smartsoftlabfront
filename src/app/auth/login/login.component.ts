import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { LoginService } from '../../services/login.service';
import { CryptoService } from '../../services/crypto.service';

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
    user_mail: new FormControl('pruebatest@yopmail.com', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    user_password: new FormControl('pwdTest123#', [Validators.required]),
  });

  constructor(private loginService: LoginService, private router: Router,
    private cryptoService: CryptoService) {

     }

  ngOnInit(): void {
  }

  loginUser() {
  
    //Verifica que el formulario es valido

    if (this.loginForm.invalid) {
      Swal.fire('Error', "Verifique los datos ingresados", 'error');
      return;
    } else {
      
      //Concatena la data para luego encriptarla

      const concateData = `{"user_mail":"${this.loginForm.get('user_mail').value}","user_password":"${this.loginForm.get('user_password').value}"}`;
      this.loginService.login(this.cryptoService.encrypt(concateData))
        .subscribe(resp => {
          this.router.navigateByUrl('/opt');
        }, (err) => {
          Swal.fire('Error', "Verifique los datos ingresados", 'error');
        });
    }
  }
}
