import { Component,OnInit } from '@angular/core';
//import { IonicPage } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuoteDetailsPage} from '../quote-details/quote-details';
import {QuotesService} from '../../services/quotes';

// for Observables
import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';

import {
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

//quotes: QuotesService;
quoteCollection: {category: string,quotesDetails: Quote[],icon: string}[];

 quotes: FirebaseListObservable<any>;
 quotesDetailsPage=QuoteDetailsPage;
 constructor(private navCtrl: NavController,
              private quotesService: QuotesService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              angFire: AngularFireDatabase
              ) {

                this.quotes= angFire.list('data/Quotes');
               
  }
  ngOnInit(){
//this.quoteCollection= this.quotes;
 }

ionViewWillEnter() {
   // this.quotes = this.quotesService.getQuotes();
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    //this.quotes = this.quotesService.getQuotes();
  }


 

}

