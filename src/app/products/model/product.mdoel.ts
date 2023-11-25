export class Product {
  public id: string;
  public name: string;
  public image: string;
  public originalPrice: number;
  public discount: number=0;
  get discountPrice(): number {
    return this.originalPrice * this.discount;
  }
  public rating: number;
  constructor(
    id: string,
    name: string,
    image: string,
    rating: number,
    originalPrice: number,
    discount: number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.rating = rating;
    this.originalPrice = originalPrice;
    this.discount = discount;
  }
}
