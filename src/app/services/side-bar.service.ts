import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  //Servicio para obetner el Menu del Sidebar
  
  menu: any[] = [
    
        { titulo: 'Opción 1', url: '/'},
        { titulo: 'Opción 2', url: '/'},
        { titulo: 'Opción 3', url: '/'},
        { titulo: 'Opción 4', url: '/'},
        { titulo: 'Opción 5', url: '/'},
        { titulo: 'Opción 6', url: '/'},
        { titulo: 'Opción 7', url: '/'},
        { titulo: 'Opción 8', url: '/'},
        { titulo: 'Opción 9', url: '/'},
        { titulo: 'Opción 10', url: '/'},
      
  ];

  constructor() { }
}
