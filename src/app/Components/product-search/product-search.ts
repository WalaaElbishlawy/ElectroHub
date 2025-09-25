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
  }

}
