"use strict";
// npm i pluralize
// npm i --save-dev @types/pluralize  -js ile yazıldığından dolayı yüklendi
Object.defineProperty(exports, "__esModule", { value: true });
// import { CategoryService } from "../services";
const services_1 = require("./services");
const categoryService = new services_1.CategoryService();
const productService = new services_1.ProductService();
let data = [];
categoryService
    .getAll("https://northwind.vercel.app/api/categories")
    .then((categories) => {
    categories.forEach((Catagory) => { console.log(Catagory); data.push(Catagory); });
});
// console.log(data);
// productService.getAll("http://localhost:5128/api/products").then((products) => {
//   console.log(products);
// });
