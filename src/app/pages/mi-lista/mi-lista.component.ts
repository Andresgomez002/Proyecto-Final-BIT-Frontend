import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.component.html',
  styleUrls: ['./mi-lista.component.css']
})
export class MiListaComponent implements OnInit {
  cart: any[] = [];
  ngOnInit(): void {
    const cartStorage = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [];
    this.cart = cartStorage;
    console.log(this.cart);
  }
  removeToCart(_id: string) {
    this.cart = this.cart.filter((item) => {
      return item._id !== _id;
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
