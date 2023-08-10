import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/auth/interfaces/product.interface';
import { Products } from 'src/app/auth/interfaces/products.interface';
import { Cart } from 'src/app/protected/interfaces/cart.interface';
import { HistoryService } from 'src/app/services/history.service';
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
  cart: any[] = [];

  constructor(
    private productsService: ProductsService,
    private historyService: HistoryService 
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
  agregarCarrito(product: any) {
    const cartStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];

    this.cart = cartStorage;

    this.cart = [
      {
        _id: product._id,
        name: product.name,
        urlImage: product.urlImage
      },
      ...this.cart
    ]

      // this.cart.push({
      //   _id: product._id,
      //   name: product.name,
      //   urlImage: product.urlImage
      // });



    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  addToHistory(product: any) {
    this.historyService.addToReadHistory(product);
  }

}
