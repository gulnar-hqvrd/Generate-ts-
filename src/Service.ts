import pluralize  from "pluralize";


console.log(pluralize("category"));
console.log(pluralize("product"));


class Category {
    categoryID: number;
    categoryName: string;
    description: string;
    constructor(categoryName: string) {
      this.categoryID = 0;
      this.categoryName = "";
      this.description = "";
    }
  }
  class Product {
    productID: number;
    productName: string;
    supplierID: number;
    categoryID: number;
    quantityPerUnit: string;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    reorderLevel: number;
    discontinued: boolean;
  
    constructor() {
      this.productID = 0;
      this.productName = "";
      this.supplierID = 0;
      this.categoryID = 0;
      this.quantityPerUnit = "";
      this.unitPrice = 0;
      this.unitsInStock = 0;
      this.unitsOnOrder = 0;
      this.reorderLevel = 0;
      this.discontinued = false;
    }
  }
  
  class Shipper {
    shipperID: number;
    companyName: string;
    phone: string;
    constructor() {
      this.shipperID = 0;
      this.companyName = "";
      this.phone = "";
    }
  }
  
  type typeId = number | string;
  interface IService<T> { 
    get(id: typeId): Promise<T>; 
    getAll(): Promise<T[]>;
  }
  
  class Service<T> implements IService<T> {
    async get(id: typeId): Promise<T> {
      const response = await fetch(`http://localhost:5128/api/Categories/${id}`);
      const data = (await response.json()) as T;
      return data;
    }
    async getAll(): Promise<T[]> {
      const response = await fetch("http://localhost:5128/api/Categories");
      const data = (await response.json()) as T[];
      return data;
    }
  }
  
  class CategoryService extends Service<Category> {} 
  class ProductService extends Service<Category> { } 
  class ShipperService extends Service<Category> { }
  
  
  
  
  
  const categoryService = new CategoryService();
  const productService = new ProductService();
  categoryService.getAll().then((data) => console.log(data));
  
  categoryService.get(2).then((data) => console.log(data));
  productService.get(1).then((data) => console.log(data));
  // const cproductService = new ProductService();
  // cproductService.getAll().then((data) => console.log(data));
  
  /*
  class CategoryService implements IService<Category> {
    async getAll(): Promise<Category[]> {
      const response = await fetch("http://localhost:5128/api/Categories");
      const data = (await response.json()) as Category[];
      return data;
    }
  
    async get(id: number): Promise<Category> {
      const response = await fetch(`http://localhost:5128/api/Categories/${id}`);
      const data = (await response.json()) as Category;
      return data;
    }
  }
  class ProductService implements IService<Product> {
    async getAll(): Promise<Product[]> {
      const response = await fetch("http://localhost:5128/api/Products");
  
      const data = (await response.json()) as Product[];
      return data;
    }
  
    async get(id: number): Promise<Product> {
      const response = await fetch(`http://localhost:5128/api/Products/${id}`);
      const data = (await response.json()) as Product;
      return data;
    }
  }
  */
  