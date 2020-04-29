import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  no: number;
  edition: number;
  author: string;
  stock: number;
}

const table_data: PeriodicElement[] = [
  { no: 1, name: 'Liner Integrated Circuits', edition: 7, author: 'Roy choudhary', stock: 15 },
  { no: 2, name: 'Computer Networks', edition: 4, author: 'William Stallins', stock: 6 },
  { no: 3, name: 'Microprocessor ', edition: 3, author: 'Gaonkar', stock: 8 },
  { no: 4, name: 'OPPS & C++', edition: 5, author: 'Herbert Shieldt', stock: 5 },
];

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.scss']
})

export class BookShelfComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'edition', 'author', 'stock'];
  //dataSource = table_data;
  dataSource = new MatTableDataSource(table_data);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
