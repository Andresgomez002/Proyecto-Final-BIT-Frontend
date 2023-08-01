import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/auth/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Products = { products: [] };
  productsComedia: Products = { products: []};

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getNProducts('Accion', 6)
      .subscribe( products => this.products = products );
      this.productsService.getNProducts('Comedia', 1)
      .subscribe( products => this.productsComedia = products );
  }
}
