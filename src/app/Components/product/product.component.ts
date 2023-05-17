import { Component } from '@angular/core';
interface Product {
  sno: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public product: Product =
    {
      sno: 'AA101',
      name: 'Apple Watch',
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP7F3ref_VW_PF+watch-45-alum-silver-nc-8s_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1660778107352%2C1661970017060',
      qty: 2,
      price: 1500


    };
  public incrementQty(): void { 
    this.product = {
      ...this.product,
      qty: this.product.qty + 1 < 10 ? this.product.qty +1 : 10,
    }
  }
  public decrementQty(): void { 
    this.product = {
      ...this.product,
      qty: this.product.qty - 1 > 0 ? this.product.qty - 1: 1,
    }
  }

}
