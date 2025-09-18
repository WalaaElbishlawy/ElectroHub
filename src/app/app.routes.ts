import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { About } from './Components/about/about';
import { NotFound } from './Components/not-found/not-found';
import { ProductDetails } from './Components/product-details/product-details';
import { ProductSearch } from './Components/product-search/product-search';
import { Cart } from './Components/cart/cart';
import { Register } from './Components/register/register';
import { Login } from './Components/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'productSearch',
    component: ProductSearch
  },
  {
    path: 'cart',
    component: Cart
  },
  {
    path: 'products/:id',
    component: ProductDetails
  },
  {
    path: 'about',
    component: About
  },
  {
    path: '**',
    component: NotFound
  }

];
