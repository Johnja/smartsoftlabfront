import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { LoginService } from '../../services/login.service';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})



export class SidebarComponent implements OnInit {

  menuItems: any[] = [];
  
  constructor(private loginService: LoginService, private router: Router, private sideBarService: SideBarService) {
      this.menuItems = sideBarService.menu;
   }

  ngOnInit() {

  }

  //Metodo Logout 
  
  logOut(){
    this.loginService.logOut();
    this.router.navigateByUrl('/login');
  }

}
