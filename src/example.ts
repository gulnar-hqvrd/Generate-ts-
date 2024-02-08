// tsc src\example.js yazanda example js yaranir

// function printId <T>(id : T){
//     return id
// }

// const stringId = printId("123")
// console.log(typeof stringId);

// const numberId = printId(123)
// console.log(typeof numberId);

// const id = printId(true)
// console.log(typeof id)

// function printElmaArmud<Elma , Armut>(firstname : Elma , lastname : Armut){}

// const result = printElmaArmud<string , number >("Elma" , 1);
// const result1 = printElmaArmud("Elma" , 1);

// function printId<T>(id : T){
//     return id
// }

// ---------------------------------------------------------------------------------

// singletons
// repository

type IdType = number | string;
class CoreEntity {
  Id?: IdType;
}
class Product extends CoreEntity {}
class Catagory extends CoreEntity {}

// class ProductService {
//   insert = (entity: Product): boolean => true;
//   update = (entity: Product) => {};
//   delete = (id: number) => {};
//   get = (id: number): Product => new Product();
//   getall = (): Product[] => new Array<Product>();
// }

// class CatagoryService {
//   Insert = (entity: Catagory): boolean => true;
//   Update = (entity: Catagory) => {};
//   Delete = (id: number) => {};
//   Get = (id: number): Catagory => new Catagory();
//   GetAll = (): Catagory[] => new Array<Catagory>();
// }

// const productservice = new ProductService();
// const newproduct = new Product();
// productservice.insert(newproduct);

// const products = productservice.getall();
// const product = productservice.get(1);
// // productservice.update(product);

interface IService<T> {
  Insert(entity: T): boolean;
  Update(entity: T): T;
  Delete(id: IdType): boolean;
  Get(id: IdType): T;
  GetAll(): T[];
}

// class ProductService implements IService<Product>{
//     Insert(entity: Product): boolean {
//         throw new Error("Method not implemented.");
//     }
//     Update(entity: Product): Product {
//         throw new Error("Method not implemented.");
//     }
//     Delete(id: IdType): boolean {
//         throw new Error("Method not implemented.");
//     }
//     Get(id: IdType): Product {
//         throw new Error("Method not implemented.");
//     }
//     GetAll(): Product[] {
//         throw new Error("Method not implemented.");
//     }

// }

// class CatagoryService implements IService<Catagory>{
//     Insert(entity: Catagory): boolean {
//         throw new Error("Method not implemented.");
//     }
//     Update(entity: Catagory): Catagory {
//         throw new Error("Method not implemented.");
//     }
//     Delete(id: IdType): boolean {
//         throw new Error("Method not implemented.");
//     }
//     Get(id: IdType): Catagory {
//         throw new Error("Method not implemented.");
//     }
//     GetAll(): Catagory[] {
//         throw new Error("Method not implemented.");
//     }

// }

// class Service<T extends CoreEntity> implements IService<T> {
//   Insert(entity: T): boolean { return true}
//   Update(entity: T): T { return entity}
//   Delete(id: IdType): boolean { return true}
//   Get(id: IdType): T { return T }
//   GetAll(): T[] { return new Array<T>()}
// }

// interface  IProductService {}
// class ProductService extends Service<Product> implements IProductService {}


// interface ICatagoryService {
//   GetProducts(id: IdType): Product[];
// }

// class CatagoryService extends Service<Catagory> implements ICatagoryService {
//   GetProducts(id: IdType): Product[] {
//     throw new Error("Method not implemented.");
//   }
// }
