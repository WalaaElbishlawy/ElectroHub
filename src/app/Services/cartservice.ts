import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {

  cartItems:IProduct[]=[];

  AddToCart(product: IProduct)
  {
    if(product. stock >= 1)
    {
      product.stock--;

      const existingProduct = this.cartItems.find(p => p.id=== product.id);

      if(existingProduct)
      {
        existingProduct.stock++
      }
      else
      {
        this.cartItems.push({...product, stock: 1});
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
      (sum, item) => sum + (item.price * item.stock),0);
  }

}
