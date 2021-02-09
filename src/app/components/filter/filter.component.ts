import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent implements OnInit {

  @Output() formID:  EventEmitter<any>;

    //Formulario de Search

    searchForm = new FormGroup({
      data: new FormControl('', [Validators.required]),
    });
  

  constructor() { 

    this.formID = new EventEmitter();

  }

  ngOnInit() {

  }

 getId(){

    this.formID.emit(this.searchForm.get('data').value);
    this.searchForm.reset();
  }

}
