import {Component, OnInit} from 'angular2/core';
import {Item} from './item';
import {ItemService} from './item.service';
import {CategoryComponent} from './category.component';

@Component({
    selector: 'my-products',
    templateUrl: 'html/products.html',
    providers: [ItemService]
})
export class ProductsComponent implements OnInit {
    
    items: Item[];
    selectedProduct:Item;
    
    constructor(private _itemService: ItemService) { }
    
    getProducts() {
        this._itemService.getItems().then(items => this.items = items);
    }
  
    ngOnInit() {
        this.getProducts();
    } 
    
    onSelect(item: Item) { 
        console.log(this.items);
        console.log(item);
        this.selectedProduct = item; 
    }
}