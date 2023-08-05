
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
}

