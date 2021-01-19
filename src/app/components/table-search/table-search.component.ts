import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';

//Services
import { TableService } from '../../services/table.service';
import { CryptoService } from '../../services/crypto.service';

//SweetAlert
import Swal from 'sweetalert2'
import { ExportFileService } from 'src/app/services/export-file.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: []
})
export class TableSearchComponent implements OnInit,AfterViewInit {

  @ViewChild('TableSearchPaginator', { static: true }) tableSearchPaginator: MatPaginator;
  @ViewChild('TableSearchSort', { static: true }) tableSearchSort: MatSort;

  public headElementsTableSearch: string[] = ['name', 'cel', 'email', 'date', 'age',];

  //Formulario del date picker

  range = new FormGroup({
    begin_date: new FormControl(),
    end_date: new FormControl()
  });

  //Formulario del input y el select

  searchForm = new FormGroup({
    filter_field : new FormControl('Nombre', Validators.required ),
    filter_value : new FormControl('', Validators.required),
  })

  public dataTableSearch: any[] = []; 
  public tableSearch: MatTableDataSource<any>;

  constructor(private tableService: TableService, private cryptoService: CryptoService, private exportFileService: ExportFileService) { 
  
  }

  ngOnInit(): void {
    this.tableSearch = new MatTableDataSource(this.dataTableSearch);
    this.tableSearch.paginator = this.tableSearchPaginator;
    this.tableSearch.sort = this.tableSearchSort;
  }

  ngAfterViewInit() {

    this.tableSearch = new MatTableDataSource(this.dataTableSearch);
    this.tableSearch.paginator = this.tableSearchPaginator;
    this.tableSearch.sort = this.tableSearchSort;
  }

  //Función que solicita al API la consulta para llenar la tabla consulta
  
  searchData(){

    const vault_id: string = 'b73bde9f-6891-4b2e-847e-484be1830794';
    const filter_field = this.searchForm.get('filter_field').value;
    const filter_value = this.searchForm.get('filter_value').value;
    const begin_date = this.range.get('begin_date').value;
    const end_date = this.range.get('end_date').value;
    const page: number = 1;
    const items_per_page: number = 10;
 
    //concatena los datos para encriptarlos

    const concateData = 
    `{"vault_id": "${vault_id}",
    "filter_field": "${filter_field}",
    "filter_value": "${filter_value}",
    "begin_date": "${begin_date}",
    "end_date": "${end_date}",
    "page": "${page}",
    "items_per_page": "${items_per_page}"}`;

    //Observable con el resultado del back end

    this.tableService.searchPurchases(this.cryptoService.encrypt(concateData)).pipe(
        map((resp: any) => {

          //aca sacamos el Json Hijo el padre para que al utilizar el subscribe solo llegue el HIjo
          resp.HIJO 
        })
    )
    .subscribe( (resp:any) => {

  //Aqui ponemos un servicio que recorra el array resp desencripte cada cada y asi que el aray de datos que enviaremos a nuestra tabla para mostrar

    }, (err) =>{
      Swal.fire('Error', "Verifique los datos ingresados", 'error');
    });
  }

  //Función que limpia los forms

  clearData(){
    this.range.reset();
    this.searchForm.reset();
  }

  //función para exportar data recibida a excel

  exportData(){

    const vault_id: string = 'b73bde9f-6891-4b2e-847e-484be1830794';
    const filter_field = this.searchForm.get('filter_field').value;
    const filter_value = this.searchForm.get('filter_value').value;
    const begin_date = this.range.get('begin_date').value;
    const end_date = this.range.get('end_date').value;

    //Concatenar los campos para encriptarlos

    const concateData = 
    `{"vault_id": "${vault_id}",
    "filter_field": "${filter_field}",
    "filter_value": "${filter_value}",
    "begin_date": "${begin_date}",
    "end_date": "${end_date}"}`;

    //Observable que recibe el string del back end

    this.exportFileService.getDatatoExport(this.cryptoService.encrypt(concateData))
      .pipe(
        delay(1000)
      )
      .subscribe( (exportFile: any) => {

        //Desencriptar el string
        
        const exportFileDecode = this.cryptoService.decrypt(exportFile);

        //Aca se implementaria un servicio con una libreria externa para exportar en excel
        
      }, (err) => {
        Swal.fire('Error', "Verifique los datos ingresados", 'error');
      });
  }
}
