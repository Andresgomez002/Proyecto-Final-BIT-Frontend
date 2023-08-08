import { Injectable, OnInit } from '@angular/core';
import { New } from '../protected/interfaces/new.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService implements OnInit{
  noticias! : Array<New>;
  constructor() { }
}
