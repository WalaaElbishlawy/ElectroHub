<<<<<<< HEAD
<<<<<<< HEAD
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
=======
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';
import { ProductService } from '../../Services/product-service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  private route = inject(ActivatedRoute); // ActivatedRoute allows access to route parameters
  private productService = inject(ProductService);
  private router = inject(Router);// Router service for programmatic navigation

  product!: IProduct | undefined;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
<<<<<<< HEAD
<<<<<<< HEAD
    this.productService.getProductByID(id).subscribe({
      next: (res) => this.product = res,
      error: (err) => console.error('Error fetching product details', err)
    });
=======
    this.product = this.productService.getProductByID(id);
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
    this.product = this.productService.getProductByID(id);
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
  }

  backToProducts() {
  this.router.navigate(['/productSearch']).then(() => {
      console.log('Navigated back to products');
      });
  }

}
