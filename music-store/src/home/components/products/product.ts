export class Product {
  main_category: String;
  sub_category: String;
  product_name: String;
  product_descriptions: String;
  image_paths: String;
  price: number;
  product_beginner: boolean;
  product_recommended: boolean;
  constructor(image_paths: String, main_category: String, price: number, product_beginner: boolean, product_descriptions: String, product_name: String, product_recommended: boolean, sub_category: String) {
    this.image_paths = image_paths;
    this.sub_category = sub_category;
    this.main_category = main_category;
    this.price = price;
    this.product_beginner = product_beginner;
    this.product_descriptions = product_descriptions;
    this.product_name = product_name;
    this.product_recommended = product_recommended;
  }
}
