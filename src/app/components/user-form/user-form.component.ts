import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, } from '@angular/forms';

//Services
import { UserService } from 'src/app/services/user.service';

//SweetAlert
import Swal from 'sweetalert2'

//model

import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  @Output() onItemAdded: EventEmitter<boolean>;
  @Output() onItemUpdate: EventEmitter<boolean>;
  @Output() userFormFull: EventEmitter<any>;

  public emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  minLength: number = 6;

  //Formulario de User

  userForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(this.minLength)]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.minLength)]),
  });

  constructor(private fb: FormBuilder, private userService: UserService) {

    this.onItemAdded = new EventEmitter(false);
    this.onItemUpdate = new EventEmitter(false);
    this.userFormFull = new EventEmitter();

  }

  ngOnInit() {

    this.isUserArrive();

  }

  public onCreate() {

    this.onItemAdded.emit(true);
    this.onItemUpdate.emit(true);
    this.userFormFull.emit(this.userForm);
    this.userForm.reset();

  }

  isUserArrive() {

    if (this.user) {
      this.userForm.patchValue(
        {
          id: this.user.id,
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        });
    }
  }

  get f() { return this.userForm.controls; }

}
