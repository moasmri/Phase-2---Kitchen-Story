import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { environment } from 'src/environments/environment.prod';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAllProductsComponent } from './components/admin-all-products/admin-all-products.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminSignInComponent } from './components/admin-sign-in/admin-sign-in.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    ProductComponent,
    PurchaseComponent,
    ThankYouComponent,
    LatestProductsComponent,
    AdminComponent,
    AdminAllProductsComponent,
    AdminAddProductComponent,
    AdminSignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,

    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
