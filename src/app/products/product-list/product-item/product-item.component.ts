import { Component, Input } from '@angular/core';
import{Product} from '../../model/product.mdoel'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() item:Product | undefined;
}
