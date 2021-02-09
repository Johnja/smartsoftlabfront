import { Component, OnInit } from '@angular/core';

//modules
import { MatAccordion } from '@angular/material/expansion';
import { MatTabGroup } from '@angular/material/tabs';

//Services

import { UserService } from 'src/app/services/user.service';

//Interfaces
import { UserForm } from '../../interfaces/user-form.interface';

//model

import { User } from '../../models/user.model';

//SweetAlert
import Swal from 'sweetalert2'

@Component({
  selector: 'app-managment-user',
  templateUrl: './managment-user.component.html',
  styles: [
  ]
})
export class ManagmentUserComponent implements OnInit {

  headElements: string[] = ['id', 'name', 'email',];

  users: User[];
  user: User;


  constructor(private userService: UserService) { }

  ngOnInit() {

    this.uploadUsers();

  }

  uploadUsers() {

    this.userService.listUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  getUserUpdate(id: string) {

    this.userService.getUserById(id).subscribe((user: any) => {
      this.user = user;
    }

    );
  }

  onCreate(formData: any) {

    this.userService.createUser(formData.value).subscribe(event => {
      Swal.fire('creado', 'Usuario creado', 'success').then((result) => {
        if (result.value) {
        return true
        }
      });
    })

  }

  update(formData: any) {

    this.userService.updateUser(formData.value).subscribe(event => {
      Swal.fire('creado', 'Usuario Actualizado', 'success');
    });

  }

  getUserDelete(id: string) {

    Swal.fire({
      title: '¿Borrar usuario?', text: `Esta a punto de eliminar un usuario`,
      icon: 'question', showCancelButton: true, confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) {
        this.userService.deleteUser(id).subscribe(resp => {
          this.users = [];
          this.uploadUsers();
          Swal.fire(
            'Usuario borrado',
            `fue eliminado correctamente`,
            'success'
          );

        });

      }
    })
  }

  verifyChange(status: boolean) {

    if (status) {
      this.users = [];
      this.ngOnInit();

    }
  }

}

