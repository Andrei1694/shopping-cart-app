import { CrudComponent } from './pages/CrudPage/crud/crud.component';
import { CartPageComponent } from './pages/CartPage/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/CheckoutPage/checkout-page/checkout-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductsPageComponent } from './pages/ProductsPage/products-page/products-page.component';
import { SingleProductComponent } from './pages/SingleProductPage/single-product/single-product.component';


const routes: Routes = [
    { path: 'products', component: ProductsPageComponent },
    { path: 'product/:id', component: SingleProductComponent },
    { path: 'checkout', component: CheckoutPageComponent },
    { path: 'cart', component: CartPageComponent },
    { path: 'crud', component: CrudComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}

