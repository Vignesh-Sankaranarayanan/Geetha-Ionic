import { Component,OnInit } from '@angular/core';
//import { IonicPage } from 'ionic-angular';
import {ArticleDetailsPage} from '../article-details/article-details';
import {QuotesService} from '../../services/quotes';

// for Observables
import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';

import {
  NavController,
  PopoverController,
  LoadingController
} from "ionic-angular";


@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {

 articles: FirebaseListObservable<any>;
 articlesDetailsPage=ArticleDetailsPage;
 constructor(private navCtrl: NavController,
              private quotesService: QuotesService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              angFire: AngularFireDatabase
              ) {

                this.articles= angFire.list('data/spiritualarticles');
               
  }
  ngOnInit(){
//this.quoteCollection= this.quotes;
 }

ionViewWillEnter() {
   // this.quotes = this.quotesService.getQuotes();
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlesPage');
    //this.quotes = this.quotesService.getQuotes();
  

}}

