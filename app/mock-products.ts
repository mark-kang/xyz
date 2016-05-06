import {Category} from './category';
import {Item} from './item';
export var CATEGORIES: Category[] = [
    {"id": 1, "name": "BEDROOM"},
    {"id": 2, "name": "LIVING ROOM"}
];
export var ITEMS: Item[] = [
    { 
        "itemNo": "1", 
        "category": "BEDROOM",
        "detail": "this is a good pillow?", 
        "size": "50 x 200 x 80", 
        "color": "yellow" ,
        "maintenance": `물세탁 하구싶은면 해. \n 책임은 못진다.`,
        "img1" : "images/item/1-1.png",
        "img2" : "images/item/1-2.png",
        "img3" : "images/item/1-3.png",
        "img4" : "images/item/1-4.png",
    },
    { 
        "itemNo": "1234-xxx",  
        "category": "BEDROOM", 
        "detail": "this is a good pillow?", 
        "size": "50 x 200 x 80", 
        "color": "똥색" ,
        "maintenance": "water washable",
        "img1" : "images/item/2-1.png",
        "img2" : "images/item/2-2.png",
        "img3" : "images/item/2-3.png",
        "img4" : "images/item/2-4.png",
    }
];