import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product.mdoel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  items: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.items = this.productService.getProducts();
  }
}
