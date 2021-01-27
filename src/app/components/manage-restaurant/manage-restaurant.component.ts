import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';

//Services
import { RestaurantService } from 'src/app/services/restaurant.service';

//SweetAlert
import Swal from 'sweetalert2'

@Component({
  selector: 'app-manage-restaurant',
  templateUrl: './manage-restaurant.component.html',
  styles: [
  ]
})
export class ManageRestaurantComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<any>;

  public createForm: FormGroup;

  minLength: number = 3;

  constructor(private fb: FormBuilder, private restaurantService: RestaurantService) {
    this.onItemAdded = new EventEmitter();

  }

  async ngOnInit() {

    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'city': ['', Validators.required]
    });
  }

  public onCreate() {

    this.restaurantService.createRestaurant(this.createForm.value).subscribe(event => {
      console.log('item created!');
      this.onItemAdded.emit(true);
      this.createForm.reset();
      Swal.fire('creado', 'Restaurante creado', 'success');
    })


  }

  get f() { return this.createForm.controls; }

}
