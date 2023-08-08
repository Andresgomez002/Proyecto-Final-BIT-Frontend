import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from 'src/app/auth/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent {
  products!: any;

  chapterForm: FormGroup = this.fb.group({
    titulo: [
      '',   // Valor por defecto
      [
        Validators.required
      ]
    ],
   
    manga: [
      '',  // Valor por defecto
      []
    ],
    image: [null, Validators.required]
  })
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
  ){  
  }

}
