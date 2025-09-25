import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {

  cartItems:IProduct[]=[];

  AddToCart(product: IProduct)
  {
<<<<<<< HEAD
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
=======
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
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
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
<<<<<<< HEAD
      (sum, item) => sum + (item.price * item.stock),0);
=======
      (sum, item) => sum + (item.Price * item.Quantity),0);
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
  }

}
