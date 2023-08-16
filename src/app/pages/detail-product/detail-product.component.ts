
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/auth/interfaces/product.interface';
import { Products } from 'src/app/auth/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{
  productId!: any;
  product!: Product;
  cart: any[] = [];
  constructor(private route: ActivatedRoute, private productService: ProductsService){

  }
  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.productService.getProductById(this.productId).subscribe(product => {
        this.product = product;
      });
    });
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
}

