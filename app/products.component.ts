import {Component, OnInit} from 'angular2/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {CategoryComponent} from './category.component';

@Component({
    selector: 'my-products',
    templateUrl: 'html/products.html',
    providers: [ProductService]
})
export class ProductsComponent implements OnInit {
    
    products: Product[];
    selectedProduct:Product;
    
    constructor(private _productService: ProductService) { }
    
    getProducts() {
        this._productService.getProducts().then(products => this.products = products);
    }
  
    ngOnInit() {
        this.getProducts();
    } 
    
    onSelect(product: Product) { 
        console.log(this.products);
        console.log(product);
        this.selectedProduct = product; 
    }
}