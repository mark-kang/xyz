import {Component, OnInit} from 'angular2/core';
import {Category} from './category';
import {Item} from './item';
import {ItemService} from './item.service';

@Component({
    selector: 'my-item',
    templateUrl: 'html/item.html',
    providers: [ItemService]
})
export class ItemComponent implements OnInit { 
    selectedItem: Item;
    
    constructor(private _itemService: ItemService) { }
    
    getItem(id:number) {
        this._itemService.getItemById(id).then(item => {
            this.selectedItem = item; console.log(this.selectedItem);
        });
    }
  
    ngOnInit() {
        this.getItem(1);
    } 
    
}