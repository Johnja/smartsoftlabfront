import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { SideBarService } from 'src/app/services/side-bar.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = [];
  
  constructor(private sideBarService: SideBarService, private loginService: LoginService,
    private router: Router) {
    this.menuItems = sideBarService.menu;
   }

  ngOnInit(): void {
  }

  //Metodo Logout 
  
  logOut(){
    this.loginService.logOut();
    this.router.navigateByUrl('/login');
  }

}
