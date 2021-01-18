import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { LoginService } from 'src/app/services/login.service';

//SweetAlert
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public loginForm = new FormGroup({
    user_mail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    user_password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {

    if (this.loginForm.invalid) {
      Swal.fire('Error',"Verifique los datos ingresados", 'error');
      return;
    }
    this.loginService.login(this.loginForm.value)
      .subscribe(resp => {
        this.router.navigateByUrl('/opt');
      }, (err) => {
          Swal.fire('Error', err.error.msg, 'error');
      });
  }


}
