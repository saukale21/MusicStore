export class Products {
  id: number;
  name: string;
  imgPath: string;
  price: number;
  constructor(id: number, name: string, price: number, imgPath: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgPath = imgPath;
  }
}
