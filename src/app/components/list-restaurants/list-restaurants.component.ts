import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styles: [
  ]
})
export class ListRestaurantsComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() city: string;

  constructor() { }

  ngOnInit() {
    
  }

}

