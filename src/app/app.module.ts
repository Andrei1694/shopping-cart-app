import { ProgressComponent } from './pages/ProductsPage/progress/progress.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './global-components/navbar/navbar.component';
import { ProductCardComponent } from './pages/ProductsPage/products-page/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsPageComponent } from './pages/ProductsPage/products-page/products-page.component';
import { FeatureRoutingModule } from './router.module';
import { SingleProductComponent } from './pages/SingleProductPage/single-product/single-product.component';
import { CheckoutPageComponent } from './pages/CheckoutPage/checkout-page/checkout-page.component';
import { FooterComponent } from './global-components/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { CartPageComponent } from './pages/CartPage/cart-page/cart-page.component';
import { CrudComponent } from './pages/CrudPage/crud/crud.component';
import { CategoryPanelComponent } from './pages/ProductsPage/products-page/category-panel/category-panel.component';
import { SearchedFilter } from './pipes/SearchFilter.pipe';
import { CrudCardComponent } from './pages/CrudPage/crud/crud-card/crud-card.component';
import { CrudTabsComponent } from './pages/CrudPage/crud/crud-tabs/crud-tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    ProductsPageComponent,
    SingleProductComponent,
    CheckoutPageComponent,
    FooterComponent,
    PagesComponent,
    CartPageComponent,
    CrudComponent,
    CategoryPanelComponent,SearchedFilter, CrudCardComponent, CrudTabsComponent,ProgressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeatureRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
