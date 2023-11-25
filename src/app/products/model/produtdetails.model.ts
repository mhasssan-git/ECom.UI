import { Shop } from "src/app/shop/model/shop.model";
import { Product } from "./product.mdoel";
import { ProductDescription } from "./product-description.model";

export class ProductDetails {
  public name: string;
  public soldBy: Shop;
  public product:Product;
  public productDesc:ProductDescription;
  
  constructor(name: string,product:Product,soldBy:Shop,productDesc:ProductDescription) {
    this.name=name;
    this.soldBy=soldBy;
    this.product=product;
    this.productDesc=productDesc
   
  }
}
