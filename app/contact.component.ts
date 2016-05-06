import {Component} from 'angular2/core';
import { NgForm } from 'angular2/common';
import {ContactMsg} from './contact.msg';

@Component({
    selector: 'my-contact',
    templateUrl: 'html/contact.html'
})
export class ContactComponent { 
    public model = new ContactMsg();
    
    onSubmit(){
        console.log(this.model);
    }
}