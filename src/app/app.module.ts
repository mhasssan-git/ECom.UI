import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductsComponent } from './products/products.component';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { MoneyprefixPipe } from './pipe/money.pipe';
import { DiscountpriceComponent } from './products/discountprice.component';
import { ProductDetailComponent } from './products/product-list/product-detail/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductsComponent,
    MoneyprefixPipe,
    DiscountpriceComponent,
    ProductDetailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    StarRatingModule
    
  ],
  providers: [StarRatingConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
