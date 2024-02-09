"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
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
exports.Product = Product;
