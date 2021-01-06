export class Cart {

    category: String;
    product_name: String;
    image_paths: String;
    price: String;
    constructor(category:string, product_name:string,image_paths:string,price:string) {
      this.image_paths = image_paths;
      this.category = category;
      this.price = price;
      this.product_name = product_name;
    }
  }
  