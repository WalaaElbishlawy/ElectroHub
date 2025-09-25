<<<<<<< HEAD
<<<<<<< HEAD
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from "../products/products";
import { ProductService } from '../../Services/product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-search',
  imports: [FormsModule, CommonModule, Products],
  templateUrl: './product-search.html',
  styleUrl: './product-search.css'
})
export class ProductSearch implements OnInit {

  private productService = inject(ProductService);

  searchText: string = '';
  selectedCategoryID: string = '';
  categories: string[] = [];

  ngOnInit(): void {
    this.productService.GetCategories().subscribe({
      next: (res: any[]) => {
        this.categories = res.map(c => c.name); // extract name property
      },
      error: (err) => console.error('Error fetching categories', err)
    });
=======
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from "../products/products";
import { ICategory } from '../../Models/icategory';
import { ProductService } from '../../Services/product-service';

@Component({
  selector: 'app-product-search',
  imports: [FormsModule, Products],
  templateUrl: './product-search.html',
  styleUrl: './product-search.css'
})
export class ProductSearch {

  private productService = inject(ProductService);

  searchText: string ='';
  selectedCategoryID: string = '';
  categories: ICategory[] = [];

  ngOnInit() {
    this.categories = this.productService.GetCategories();
<<<<<<< HEAD
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
  }

}
