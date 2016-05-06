import {ITEMS} from './mock-products';
import {Injectable} from 'angular2/core';

@Injectable()
export class ItemService {
  getItems() {
    return Promise.resolve(ITEMS);
  }
  getItemById(id:number) {
    console.log(ITEMS);
    console.log(ITEMS[1]);
    return Promise.resolve(ITEMS[0]);
  }
}