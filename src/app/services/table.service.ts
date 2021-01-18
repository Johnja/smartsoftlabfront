import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public dataTableSearch: any = [

    { name: 'john', cel: '3001111111', email: 'johnp@email.com', date: '01/03/2020', age: 23 },
    { name: 'carlos', cel: '3182222222', email: 'clz@email.com', date: '11/05/2020', age: 24 },
    { name: 'juan', cel: '3012345678', email: 'juancho@email.com', date: '02/07/2020', age: 21 },
    { name: 'alejandro', cel: '3186708970', email: 'alejo12@email.com', date: '05/08/2020', age: 18 },
    { name: 'camila', cel: '3208976864', email: 'cami32@email.com', date: '06/06/2020', age: 20 },
    { name: 'cladia', cel: '3145673456', email: 'lopezz@email.com', date: '07/06/2020', age: 23 },
    { name: 'miguel', cel: '3154231457', email: 'ikerl@email.com', date: '08/04/2020', age: 25 },
    { name: 'francy', cel: '3167465432', email: 'casa2@email.com', date: '11/07/2020', age: 27 },
    { name: 'eugenio', cel: '3032134235', email: 'medellin@email.com', date: '23/08/2020', age: 22 },
    { name: 'andres', cel: '3049990033', email: 'cielos2@email.com', date: '22/07/2020', age: 32 },
    { name: 'edwar', cel: '3213563478', email: 'puente3@email.com', date: '27/12/2020', age: 37 },
    { name: 'martin', cel: '3013709087', email: 'rionegro@email.com', date: '14/11/2020', age: 41},
    { name: 'emilio', cel: '4003467898', email: 'cali@email.com', date: '10/11/2020', age: 29 },
    { name: 'diana', cel: '4013456789', email: 'tecnologico1@email.com', date: '11/15/2020', age: 19 },
    { name: 'victor', cel: '2002345467', email: 'ventas3@email.com', date: '21/06/2020', age: 23 },
    { name: 'yolima', cel: '2014568902', email: 'udea@email.com', date: '28/07/2020', age: 21 },
    { name: 'gladys', cel: '2023465789', email: 'rock2@email.com', date: '30/06/2020', age: 24 },
    { name: 'guillermo', cel: '2034124973', email: 'salsa3@email.com', date: '04/06/2020', age: 20 },
    { name: 'jenny', cel: '2043589011', email: 'lugaresmed@email.com', date: '09/07/2020', age: 30 },
    { name: 'mery', cel: '3182346890', email: 'cordinacion@email.com', date: '07/04/2020', age: 33 },
    { name: 'dunia', cel: '3183713902', email: 'logros@email.com', date: '08/09/2020', age: 35 },
    { name: 'olson', cel: '3193790185', email: 'pasaporte@email.com', date: '18/07/2020', age: 37 },
    { name: 'dairon', cel: '3208901783', email: 'playa3@email.com', date: '23/05/2020', age: 43 },
    { name: 'pablo', cel: '3181113546', email: 'auto5@email.com', date: '21/04/2020', age: 41 },
    { name: 'elkin', cel: '3189990134', email: 'prueba@email.com', date: '20/01/2020', age: 40 },

  ];
  constructor() { }
}
