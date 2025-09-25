import { environment } from "../Environments/environment.development";

const domain = environment.Domain;

export const API_URLS = {
  getAllProducts: `${domain}products`,
  getSingleProduct: `${domain}products`,
  AddProduct: `${domain}products`,
  deleteProduct: `${domain}products`,

  getCategories: `${domain}products/categories`,
  getCategoriesProducts: `${domain}products/category`,

  login: `${domain}auth/login`,
}
