<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Component } from '@angular/core';
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
import { Component } from '@angular/core';
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
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
<<<<<<< HEAD
<<<<<<< HEAD
import { authGuard } from './Guards/auth-guard';
import { guestGuardGuard } from './Guards/guest-guard-guard';
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'register',
<<<<<<< HEAD
<<<<<<< HEAD
    component: Register,
    canActivate: [guestGuardGuard]
  },
  {
    path: 'login',
    component: Login,
    canActivate: [guestGuardGuard]
=======
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
    component: Register
  },
  {
    path: 'login',
    component: Login
<<<<<<< HEAD
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
  },
  {
    path: 'home',
    component: Home
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    path: 'products',
    component: Products,
    canActivate: [authGuard]
  },
  {
    path: 'productSearch',
    component: ProductSearch,
    canActivate: [authGuard]
  },
  {
    path: 'cart',
    component: Cart,
    canActivate: [authGuard]
  },
  {
    path: 'products/:id',
    component: ProductDetails,
    canActivate: [authGuard]
=======
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
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
<<<<<<< HEAD
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
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
