import { Injectable } from '@angular/core';
import { Product } from './model/product.mdoel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products:Product[]=[
    new Product("1","Bag X Luxury 3Pcs Hand bags for Woman and girls","https://th.bing.com/th/id/OIP.j_Nq8BYSYbBQVh1EGsBAywHaHa?rs=1&pid=ImgDetMain",2499,4000,.1),
    new Product("1","Bag X Luxury 3Pcs Hand bags for Woman and girls","https://th.bing.com/th/id/OIP.j_Nq8BYSYbBQVh1EGsBAywHaHa?rs=1&pid=ImgDetMain",2499,2150,.1),
    new Product("1","Bag X Luxury 3Pcs Hand bags for Woman and girls","https://th.bing.com/th/id/OIP.j_Nq8BYSYbBQVh1EGsBAywHaHa?rs=1&pid=ImgDetMain",2499,3000,.1),
    new Product("1","Bag X Luxury 3Pcs Hand bags for Woman and girls","https://th.bing.com/th/id/OIP.j_Nq8BYSYbBQVh1EGsBAywHaHa?rs=1&pid=ImgDetMain",2499,200,.1),
    new Product("1","Bag X Luxury 3Pcs Hand bags for Woman and girls","https://th.bing.com/th/id/OIP.j_Nq8BYSYbBQVh1EGsBAywHaHa?rs=1&pid=ImgDetMain",2499,500,.1),
    new Product("1","Bag X Luxury 3Pcs Hand bags for Woman and girls","https://th.bing.com/th/id/OIP.j_Nq8BYSYbBQVh1EGsBAywHaHa?rs=1&pid=ImgDetMain",2499,700,.1),
    new Product("1","Bag X Luxury 3Pcs Hand bags for Woman and girls","https://th.bing.com/th/id/OIP.j_Nq8BYSYbBQVh1EGsBAywHaHa?rs=1&pid=ImgDetMain",2499,800,.1),
    new Product("1","Bag X Luxury 3Pcs Hand bags for Woman and girls","https://th.bing.com/th/id/OIP.j_Nq8BYSYbBQVh1EGsBAywHaHa?rs=1&pid=ImgDetMain",2499,600,.1),
  ]
  public getProducts()
  {
    return this.products.slice();
  }
}
