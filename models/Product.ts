export class Product {
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
