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
<<<<<<< HEAD
<<<<<<< HEAD
  if (cartItem.stock < 0) {
    cartItem.stock = 0;
=======
  if (cartItem.Quantity < 0) {
    cartItem.Quantity = 0;
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
  if (cartItem.Quantity < 0) {
    cartItem.Quantity = 0;
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
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
<<<<<<< HEAD
<<<<<<< HEAD
    return item.id;
=======
    return item.ID;
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
    return item.ID;
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
  }

}
