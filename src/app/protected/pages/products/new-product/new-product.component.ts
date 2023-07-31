import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from 'src/app/auth/interfaces/category.interface';
import { ProductsService } from 'src/app/services/products.service';

import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  // Atributos
  categories!: Array<any>;

  // Procuramos usar los mismos nombres que espera nuestra API en las propiedades que agrupamos en nuestro FormBuilder Group
  productForm: FormGroup = this.fb.group({
    name: [
      '',   // Valor por defecto
      [
        Validators.required
      ]
    ],
   
    category: [
      '',  // Valor por defecto
      []
    ],
    description: [
      '',  // Valor por defecto
      []
    ],
    image: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.productForm.patchValue({ image: file });
  }

  createProduct() {
    console.group( 'productForm' );
    console.log( this.productForm.value );
    console.log( this.productForm.valid );
    console.groupEnd();

    this.productService.createProduct( this.productForm.value )
      .subscribe( ( response ) => {
        console.log( response );
      });

    this.productForm.reset();

    setTimeout( () => {
      this.router.navigate( [ 'dashboard', 'products' ] );
    }, 1000 );
  }

  loadCategories() {
    this.categoriesService.getCategories()
      .subscribe( categories => {
        this.categories = categories;
      });
  }

}
