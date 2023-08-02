import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/auth/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: Products = { products: [] };
  search!: string;
  

  constructor(
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    // this.loadManga();
    this.productsService.getProducts()
      .subscribe( products => this.products = products );
  }

  loadManga() {
    this.products ={ products: [] }
    this.productsService.getSearchTerm( this.search )
      .subscribe(products => {
        this.products=products
      });

  //   const filter = (typeof this.search === 'string' && this.search.length > 0) ? `?searchBy=${this.search}` : '';
  //   this.productsService.getProducts(filter).subscribe(
  //     (mangas) => {
  //       this.products = mangas;
  //     },
  //     (error) => {
  //       console.log('Error', error);
  //     }
  //   );
  }
}
