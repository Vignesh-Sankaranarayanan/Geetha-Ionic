import { Component,OnInit } from '@angular/core';
//import { IonicPage } from 'ionic-angular';
import {ArticleDetailsPage} from '../article-details/article-details';
import {QuotesService} from '../../services/quotes';

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


@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {
flag: String;
 articles: AfoListObservable<any[]>;
  tabBarElement: any;
 articlesDetailsPage=ArticleDetailsPage;
 constructor(private navCtrl: NavController,
              private quotesService: QuotesService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              angFire: AngularFireOfflineDatabase,
              private navParams: NavParams
              ) {

                this.articles= angFire.list('data/spiritualarticles');
                this.flag = navParams.get('thirdParamName'); 
                if(this.flag == 'Articles'){
                  this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
                }


               
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

