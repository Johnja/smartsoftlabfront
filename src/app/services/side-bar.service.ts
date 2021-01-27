import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  //Servicio para obetner el Menu del Sidebar
  
  menu: any[] = [
    
        { titulo: 'Crear Restaurante', url: '/'},
        { titulo: 'Restaurantes', url: '/'},
,
      
  ];

  constructor() { }
}
