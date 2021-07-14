import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit, OnDestroy {
  product!: IProduct;
  subscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getProduct(param['id']);
    });
  }

  getProduct(id: string): void {
    this.subscription = this.productsService
      .getProductById(id)
      .snapshotChanges()
      .subscribe((product) => {
        let newProdcut: any = product.payload.toJSON();
        newProdcut['id'] = product.key;
        this.product = newProdcut as IProduct;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
