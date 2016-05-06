import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HeaderComponent} from './header.component';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {ProductsComponent} from './products.component';
import {CategoryComponent} from './category.component';
import {ContactComponent} from './contact.component';
import {ItemComponent} from './item.component';

@Component({
    selector: 'my-app',
    templateUrl: 'html/header.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsComponent
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent
  },
  {
    path: '/category',
    name: 'Category',
    component: CategoryComponent
  },
  {
    path: '/item',
    name: 'Item',
    component: ItemComponent
  } 
])
export class AppComponent { 
}