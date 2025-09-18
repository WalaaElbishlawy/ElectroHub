import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {

  cartItems:IProduct[]=[];

  AddToCart(product: IProduct)
  {
    if(product. Quantity >= 1)
    {
      product.Quantity--;

      const existingProduct = this.cartItems.find(p => p.ID=== product.ID);

      if(existingProduct)
      {
        existingProduct.Quantity++
      }
      else
      {
        this.cartItems.push({...product, Quantity: 1});
      }
    }

  }
  getCartItems(): IProduct[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
  getTotal(): number {

    return this.cartItems.reduce(
      (sum, item) => sum + (item.Price * item.Quantity),0);
  }

}
