import { Component,OnInit } from '@angular/core';
//import { IonicPage } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuoteDetailsPage} from '../quote-details/quote-details';
import {QuotesService} from '../../services/quotes';
import { Quotes } from "../../models/quotes";
// for Observables
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';

import {
  NavParams,
  NavController,
  PopoverController,
  LoadingController
} from "ionic-angular";

/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

quotesNew: Quotes[];
quoteCollection: {category: string,quotesDetails: Quote[],icon: string}[];
flag: any;
tabBarElement: any;
 quotes: AfoListObservable<any[]>;
 quotesDetailsPage=QuoteDetailsPage;
 constructor(private navCtrl: NavController,
              private quotesService: QuotesService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              angFire: AngularFireOfflineDatabase,
              private navParams: NavParams
              ) {

                this.quotes= angFire.list('data/Quotes');
                this.flag = navParams.get('thirdParamName'); 
                if(this.flag == 'Quotes'){
                  this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
                }
               
               
  }
  ngOnInit(){
//this.quoteCollection= this.quotes;
 }

ionViewWillEnter() {
   //this.quotesNew = this.quotesService.getQuotes();
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
   // this.quotesNew = this.quotesService.getQuotes();
  }


 

}

