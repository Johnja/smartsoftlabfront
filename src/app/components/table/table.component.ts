import { AfterViewInit, Component, ViewChild, OnInit, Input } from '@angular/core';

//Mat Table 
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() headElements: string[];
  @Input() dataTable: any[];

  @ViewChild('TablePaginator', { static: true }) tablePaginator: MatPaginator;
  @ViewChild('TableSort', { static: true }) tableSort: MatSort;


  public tableSearch: MatTableDataSource<any>;

  constructor() { 
    
  }

  ngOnInit() {

    this.tableSearch = new MatTableDataSource(this.dataTable);
    this.tableSearch.paginator = this.tablePaginator;
    this.tableSearch.sort = this.tableSort;
  }

  ngAfterViewInit() {

    this.tableSearch = new MatTableDataSource(this.dataTable);
    this.tableSearch.paginator = this.tablePaginator;
    this.tableSearch.sort = this.tableSort;
  }


  public applyFilterTable(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.tableSearch.filter = filterValue.trim().toLowerCase();

    if (this.tableSearch.paginator) {
      this.tableSearch.paginator.firstPage();
    }

  }
}

