import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigateByUrl('/login');
  }


}
