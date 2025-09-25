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
import { authGuard } from './Guards/auth-guard';
import { guestGuardGuard } from './Guards/guest-guard-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: Register,
    canActivate: [guestGuardGuard]
  },
  {
    path: 'login',
    component: Login,
    canActivate: [guestGuardGuard]
  },
  {
    path: 'home',
    component: Home
  },
  {
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
