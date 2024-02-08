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

class Product {}

class ProductService {
  insert(entity: Product) {}
  update(entity: Product) {}
  delete(id: number) {}
  get(id: number) {}
  getall() {}
}

const productservice = new ProductService();
const newproduct = new Product();
productservice.insert(newproduct);

const products = productservice.getall();
const product = productservice.get(1);
// productservice.update(product);




class Catagory {}

class CatagoryService {
  Insert = (entity: Catagory) => {};
  Update = (entity: Catagory) => {};
  Delete = (id: number) => {};
  Get = (id: number): Catagory => new Catagory();
  GetAll = (): Catagory[] => new Array<Catagory>();
}
