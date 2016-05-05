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
    
    public selectedItem = new Item;
    public selectedImgNum = 1;
    public bigImgPath = "1-1-b.png";
    
    constructor(private _itemService: ItemService) { }
    
    getItem(id:number) {
        this._itemService.getItemById(id).then(item => this.selectedItem = item );
    }
  
    ngOnInit() {
        this.getItem(1);
    } 
    
    setBigImg(imgNum: number) { 
        this.selectedImgNum = imgNum;
        
        this.bigImgPath = this.selectedItem.itemNo + "-" + imgNum + "-b.png";
        console.log("bigImgPath = " + this.bigImgPath);
    }
}