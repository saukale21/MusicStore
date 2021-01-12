export class Cart {

    category: String;
    product_name: String;
    image_paths: String;
    price: Number;
    quantity: Number;
    constructor(category:string, product_name:string,image_paths:string,price:string) {
      var str = image_paths;
      str=str.slice(1,-1);
      str=str.slice(0,8)+str.slice(9);

      var str1 = product_name;
      str1=str1.slice(1,-1);

      var str2 = category;
      str2=str2.slice(1,-1);
      console.log(str2);

      let pricevar = Number(price);

      this.image_paths = str;
      this.category = str2;
      this.price = pricevar;
      this.product_name = str1;
      this.quantity = 1;
    }
  }
  