import {Component} from 'angular2/core';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {ProductsComponent} from './products.component';
import {ContactComponent} from './contact.component';
import {CategoryComponent} from './category.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-header',
    templateUrl: 'html/header.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
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
  }
])
export class HeaderComponent { }