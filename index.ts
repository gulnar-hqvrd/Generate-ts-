// npm i pluralize
// npm i --save-dev @types/pluralize  -js ile yazıldığından dolayı yüklendi

// import { CategoryService } from "../services";
import { CategoryService, ProductService } from "./services";

const categoryService = new CategoryService();
const productService = new ProductService();


let data:any = []

categoryService
  .getAll("https://northwind.vercel.app/api/categories")
  .then((categories) => {
   categories.forEach((Catagory) => {console.log(Catagory);data.push(Catagory)}
   );    
  });
  // console.log(data);


// productService.getAll("http://localhost:5128/api/products").then((products) => {
//   console.log(products);
// });