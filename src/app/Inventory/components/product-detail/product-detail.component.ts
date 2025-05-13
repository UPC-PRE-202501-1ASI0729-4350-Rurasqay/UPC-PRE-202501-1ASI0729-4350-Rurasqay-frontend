import { Component, OnInit } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable,
  MatTableDataSource, MatTableModule
} from '@angular/material/table';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Product } from '../../model/product.entity';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  imports: [
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    DatePipe,
    MatCellDef,
    MatHeaderCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatTableModule,
    HttpClientModule
  ],
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  displayedColumns: string[] = [
    'name', 'category', 'quantity', 'sku', 'expirationDate', 'description'
  ];
  dataSource = new MatTableDataSource<Product>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products')
      .subscribe(data => this.dataSource.data = data);
  }
}
