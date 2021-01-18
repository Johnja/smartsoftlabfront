import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TableService } from '../../services/table.service';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: []
})
export class TableSearchComponent implements OnInit,AfterViewInit {

  @ViewChild('TableSearchPaginator', { static: true }) tableSearchPaginator: MatPaginator;
  @ViewChild('TableSearchSort', { static: true }) tableSearchSort: MatSort;

  public headElementsTableSearch: string[] = ['name', 'cel', 'email', 'date', 'age',];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  public dataTableSearch: any[] = []; 
  public tableSearch: MatTableDataSource<any>;

  constructor(private tableService: TableService, private cryptoService: CryptoService) { 
    this.dataTableSearch = tableService.dataTableSearch;
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

  public applyFilterTable(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.tableSearch.filter = filterValue.trim().toLowerCase();

    if (this.tableSearch.paginator) {
      this.tableSearch.paginator.firstPage();
    }

  }

}
