// npm i pluralize
// npm i --save-dev @types/pluralize  -js ile yazıldığından dolayı yüklendi
import pluralize from "pluralize";

// import Category from "../models/Category";
// import Product from "../models/Product";
// import Shipper from "../models/Shipper";

import { Category, Product, Shipper } from "../models";

type typeId = number | string;

interface IService<T> {
  get(id: typeId): Promise<T>;
  getAll(): Promise<T[]>;
}

class Service<T> implements IService<T> {
  // private -> sadece sınıf içerisinden ulaşılabilir, dışarıya kapalıdır. default public -> dışarıdan ulaşılabilir.
  private tableName: string = pluralize(
    this.constructor.name.replace("Service", "")
  );

  async get(id: typeId): Promise<T> {
    const response = await fetch(
      `http://localhost:5128/api/${this.tableName}/${id}`
    );
    const data = (await response.json()) as T;
    return data;
  }

  async getAll(): Promise<T[]> {
    const response = await fetch(`http://localhost:5128/api/${this.tableName}`);
    const data = (await response.json()) as T[];
    return data;
  }
}

class CategoryService extends Service<Category> {}
class ProductService extends Service<Product> {}
class ShipperService extends Service<Shipper> {}
