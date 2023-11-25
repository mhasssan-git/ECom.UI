import { Component, Input } from '@angular/core';
import { Product } from 'src/app/products/model/product.mdoel';

@Component({
  selector: 'app-discountprice',
  template: '<span class="price">{{item?.originalPrice??0|money}}</span><span class="discount">{{((item?.discount)??0)*-1 | percent}}</span>',
  styles:[`
  .price{
    text-decoration: line-through;
    color:#9e9e9e;
    font-size:12px;
    line-height:14px;
    margin-top: 4px;
    margin-right: 4px;
  }
  .discount {
    color: #212121;
    opacity: .8;
    margin-left: 4px;
}
  `]
})
export class DiscountpriceComponent {
@Input() item:Product|undefined;
}
