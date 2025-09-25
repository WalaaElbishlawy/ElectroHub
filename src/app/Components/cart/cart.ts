import { CurrencyPipe } from '@angular/common';
import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { Cartservice } from '../../Services/cartservice';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, FormsModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {

  private cartservice = inject(Cartservice);
  CartItems:IProduct[]=[];

  ngOnInit(): void {
    this.CartItems=this.cartservice.getCartItems();
  }

  onQuantityChange(cartItem: IProduct) {
  if (cartItem.stock < 0) {
    cartItem.stock = 0;
  }
  }

  GetCartItems():void {
   this.CartItems= this.cartservice.getCartItems();
  }

  ClearCartItems():void {
    this.cartservice.clearCart();
  }

  getTotal() {
    return this.cartservice.getTotal();
  }

 trackById(index: number, item: IProduct): number {
    return item.id;
  }

}
