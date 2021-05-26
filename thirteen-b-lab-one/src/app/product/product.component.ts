import { Component, OnInit } from '@angular/core';
import { IItem } from '../interfaces/item.interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public listProducts:Array<IItem> = [{
    id: 0,
    img: "https://bookcart.azurewebsites.net/Upload/9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg",
    name: "HP2",
    price: 500,
    quantity : 1
  },
  {
    id: 1,
    img: "https://bookcart.azurewebsites.net/Upload/6df4a30a-e8a1-467d-9da6-d826989a9c606148028.jpg",
    name: "HP3",
    price: 350,
    quantity : 1
  },
  {
    id: 2,
    img: "https://bookcart.azurewebsites.net/Upload/5b7162d6-2780-461b-be6f-e4debac083ad18007564.jpg",
    name: "HP4",
    price: 120,
    quantity : 1
  }]

  constructor(private _cartService:CartService) { }

  ngOnInit() {
  }

  public addCart(product:IItem)
  {
    this._cartService.changeCart(product);
  }

}
