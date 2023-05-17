import { Component } from '@angular/core';
interface Shopping {
  sno: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  public shoppings: Shopping[] = [
    {
      sno: 'AA101',
      name: 'Apple Watch',
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP7F3ref_VW_PF+watch-45-alum-silver-nc-8s_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1660778107352%2C1661970017060',
      qty: 1,
      price: 2000
    },
    {
      sno: 'AA102',
      name: 'Mi Watch',
      image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjtoISXoZ3-AhVDfysKHf4pAQ4YABAFGgJzZg&sig=AOD64_0FxGOJCGPu-30MIdTSlHeO-lM-0w&adurl&ctype=5&ved=2ahUKEwiljvmWoZ3-AhUFDbcAHTBXD4YQvhd6BAgBEHg',
      qty: 2,
      price: 1000
    },
    {
      sno: 'AA103',
      name: 'Fast Track Watch',
      image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwiElYeloZ3-AhXJk2YCHcyoCQoYABAHGgJzbQ&sig=AOD64_2nkYJfZ34oWLVYhppGbrTw9JkLHA&adurl&ctype=5&ved=2ahUKEwiRvPmkoZ3-AhXz43MBHVzdCY0Qvhd6BQgBEIAB',
      qty: 3,
      price: 1500
    },
    {
      sno: 'AA104',
      name: ' Boat Watch',
      image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwiFjumvoZ3-AhUZHCsKHZ5vAC4YABAFGgJzZg&sig=AOD64_02Ii4KRBLTqcZRKudWyjzkPWZ6dA&adurl&ctype=5&ved=2ahUKEwiEhN-voZ3-AhV2BbcAHSJZCgQQvhd6BQgBEIAB',
      qty: 4,
      price: 500
    },
    {
      sno: 'AA105',
      name: ' Noise Watch',
      image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjxo6vHoZ3-AhWRDisKHUugAGcYABADGgJzZg&sig=AOD64_3UuRhiC7X9LifHr7mDETA3aJMYoQ&adurl&ctype=5&ved=2ahUKEwjWpKDHoZ3-AhXBguYKHZ7OCOoQwg96BAgBEHQ',
      qty: 5,
      price: 800
    },
  ]
  public incrementQty(ShoppingId: string): void {
   this.shoppings = this.shoppings.map((shopping) => {
     if (shopping.sno == ShoppingId)
      {
        return {
          ...shopping,
          qty: shopping.qty + 1 < 10 ? shopping.qty + 1:10,

        }
      }
     return shopping;
    })
  }
  public decrementQty(ShoppingId: string): void {
    this.shoppings = this.shoppings.map((shopping) =>
    {
      if (shopping.sno == ShoppingId)
      {
        return {
          ...shopping,
          qty: shopping.qty - 1 > 0 ? shopping.qty - 1:1
        }
      }
      return shopping;
    }) 
  }
  public CalcGrandTotal(): number{
    let total: number = 0;
    for (let shopping of this.shoppings) {
      total = total + (shopping.qty * shopping.price);
    }
    return total;
  }
}
