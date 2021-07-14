import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/services/products/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-all-products',
  templateUrl: './admin-all-products.component.html',
  styleUrls: ['./admin-all-products.component.scss'],
})
export class AdminAllProductsComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  isLoadingProducts: boolean = true;
  subscription!: Subscription;
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
        this.isLoadingProducts = false;
      });
  }

  deletProduct(id: string | undefined) {
    if (confirm('Are sure you want to delete this product?')) {
      this.productsService.deleteProduct(id);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
