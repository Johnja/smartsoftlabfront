import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  menu: any[] = [
  
        { path: '/', title: 'Dashboard', class: 'waves-effect waves-dark', classFa: 'fa fa-bar-chart pl-2',},
        { path: 'ad', title: 'Anuncios',  class: 'waves-effect waves-dark' , classFa: 'fa fa-bullhorn pl-2'},
        { path: 'managmentUser', title: 'Usuarios',   class: 'waves-effect waves-dark', classFa: 'fa fa-users pl-2' },
        { path: 'managmentProduct', title: 'Productos',  class: 'waves-effect waves-dark', classFa: 'fa fa-tasks pl-2' },
        { path: 'search', title: 'Busquedas', class: 'waves-effect waves-dark', classFa: 'fa fa-search pl-2'},
        { path: 'statistics', title: 'Reportes', class: 'waves-effect waves-dark', classFa: 'fa fa-line-chart pl-2' },
      ]

  constructor() { }
}
