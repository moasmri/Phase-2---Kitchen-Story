import { ProductsService } from './../../services/products/products.service';
import { IProduct } from './../../interfaces/IProduct';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  subscription!: Subscription;
  fetchingData: boolean = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.subscription = this.productsService
      .getProductsList()
      .snapshotChanges()
      .subscribe((productsSnapshot) => {
        this.products = [];
        productsSnapshot.forEach((productSnapshot) => {
          let product: any = productSnapshot.payload.toJSON();
          product['id'] = productSnapshot.key;
          this.products.push(product as IProduct);
        });
        this.products.reverse();
        this.fetchingData = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
