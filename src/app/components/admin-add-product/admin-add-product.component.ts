import { ProductsService } from 'src/app/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss'],
})
export class AdminAddProductComponent implements OnInit {
  addProductForm!: FormGroup;
  showSccuessMsg: boolean = false;
  addingData: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  get name() {
    return this.addProductForm.get('name');
  }

  get image() {
    return this.addProductForm.get('image');
  }

  get price() {
    return this.addProductForm.get('price');
  }

  onSubmit() {
    if (this.addProductForm.valid) {
      this.addingData = true;
      let newProduct = this.addProductForm.value;
      newProduct.createdAt = new Date().getTime();
      this.productsService.addnewProduct(newProduct);
      this.addProductForm.reset();
      this.showSccuessMsg = true;
      this.addingData = false;
    }
  }
}
