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
  productsFantasia: Products = { products: []};
  productsDrama: Products = { products: []};
  productsFiccion: Products = { products: []};

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getNProducts('Accion', 6)
      .subscribe( products => this.products = products );
      this.productsService.getNProducts('Comedia', 6)
      .subscribe( products => this.productsComedia = products );
      this.productsService.getNProducts('Fantasia', 6)
      .subscribe( products => this.productsFantasia = products );
      this.productsService.getNProducts('Drama', 6)
      .subscribe( products => this.productsDrama = products );
      this.productsService.getNProducts('Ciencia Ficcion', 6)
      .subscribe( products => this.productsFiccion = products );
  }
}
