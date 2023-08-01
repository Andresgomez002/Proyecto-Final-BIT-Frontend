import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/auth/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: Products = { products: [] };

  constructor(
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe( products => this.products = products );
  }
}
