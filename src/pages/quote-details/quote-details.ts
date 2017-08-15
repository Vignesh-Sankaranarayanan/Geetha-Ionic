import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";


import {Quote} from "../../data/quote.interface";


@Component({
  selector: 'page-quote-details',
  templateUrl: 'quote-details.html',
})
export class QuoteDetailsPage  {
  tabBarElement: any;
  quoteGroup: {category: string, quotes: Quote[], icon: string}[];

  constructor(
    private navParams: NavParams) {
       this.quoteGroup = this.navParams.data;
       this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
    }

ionViewWillEnter(){
this.tabBarElement.style.display='none';
}

ionViewWillLeave(){
this.tabBarElement.style.display='flex';
}



}
