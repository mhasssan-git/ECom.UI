export class ProductDescription {
  public description: string[];
  public attribuites: string[];
  public brand: string;
  public sku: string;
  public boxSize: string;
  constructor(
    description: string[],
    attribuites: string[],
    brand: string,
    sku: string,
    boxSize: string
  ) {
    this.description = description;
    this.attribuites = attribuites;
    this.brand = brand;
    this.sku = sku;
    this.boxSize = boxSize;
  }
}
