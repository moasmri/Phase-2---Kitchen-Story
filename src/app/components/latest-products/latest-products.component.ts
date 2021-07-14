import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/services/products/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss'],
})
export class LatestProductsComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  subscription!: Subscription;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getLatestProducts();
  }

  getLatestProducts(): void {
    this.subscription = this.productsService
      .getLatestProductList()
      .snapshotChanges()
      .subscribe((productsSnapshot) => {
        this.products = [];
        productsSnapshot.forEach((productSnapshot) => {
          let product: any = productSnapshot.payload.toJSON();
          product['id'] = productSnapshot.key;
          this.products.push(product as IProduct);
        });

        this.products.reverse();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
