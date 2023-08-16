import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  productForm!: FormGroup;
  @ViewChild('fileInput') fileInput!: ElementRef;
  // @ViewChild('fileInput2') fileInput2!: ElementRef;

  categories!: Array<any>;
  preview!: any;

  

  

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  buildForm(){
    this.productForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      urlImage: new FormControl(null),
      category: new FormControl('')
    })
  }

  createProduct() {
    console.group( 'productForm' );
    console.log( this.productForm.value );
    console.log( this.productForm.valid );
    console.groupEnd();

    const formdata = new FormData();

    formdata.append('name',this.productForm.get('name')?.value)
    formdata.append('description',this.productForm.get('description')?.value)
    formdata.append('category',this.productForm.get('category')?.value)

    const fileInput = this.fileInput.nativeElement;

    console.log(fileInput.files);
 
    if (fileInput.files && fileInput.files.length > 0) {
      formdata.append('urlImage', fileInput.files[0], fileInput.files[0].name);
    }
    // const fileInput2 = this.fileInput2.nativeElement;
    // if (fileInput2.files && fileInput2.files.length > 0) {
    //   formdata.append('imageMain', fileInput2.files[0], fileInput2.files[0].name);
    // }

    console.log( fileInput.files );
   
    
    this.productService.createProduct( formdata )
      .subscribe( ( response ) => {
        console.log('holaaa');
        console.log( '>>>>>>', response );


      });

    this.productForm.reset();

    // setTimeout( () => {
    //   this.router.navigate( [ 'dashboard', 'products' ] );
    // }, 1000 );
  }

  loadCategories() {
    this.categoriesService.getCategories()
      .subscribe( categories => {
        this.categories = categories;
      });
  }

}
