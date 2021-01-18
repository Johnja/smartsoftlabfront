import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

//SweetAlert
import Swal from 'sweetalert2'

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styles: [
  ]
})
export class OtpComponent implements OnInit {

  public tokenServer: string = "";

  public otpForm = new FormGroup({
    token: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private loginService: LoginService) {
    this.tokenServer = localStorage.getItem('token') || '';
  }

  ngOnInit(): void {
  }

  validateToken() {

    if (this.otpForm.invalid) {
      Swal.fire('Error', "Ingrese su token", 'error');
      return;
    } else {
      if (this.tokenServer === this.otpForm.get('token').value) {
        this.router.navigateByUrl('/');
      } else {
        Swal.fire('Error', "Verifique su token", 'error');
      }
    }
  }
}

