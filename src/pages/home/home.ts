import { Component,OnInit,NgZone } from '@angular/core';
//import { IonicPage } from 'ionic-angular';

import {QuotesService} from '../../services/quotes';
import {EventsService} from '../../services/events';
import {EventsModel} from '../../models/eventsModel';
import {ArticlesPage} from '../articles/articles';
import {EventDetailsPage} from '../event-details/event-details';
import {QuotesPage} from '../quotes/quotes';
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import firebase from 'firebase';
 import {  ViewChild } from '@angular/core';
 import {Slides} from 'ionic-angular';
//import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';
// for Observables
//import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';

import {
  NavController,
  PopoverController,
  LoadingController,
  AlertController
} from "ionic-angular";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

//  homeslides: FirebaseListObservable<any>;
homeslides: AfoListObservable<any[]>;
eventsDetailsPage=EventDetailsPage;
 slide: any;
 pages: any;
 item: string;
 homeslidesGroup: string;
 private navCtrlView: NavController;
firestore = firebase.storage();
mySlideOptions = {
    pager:true
  };
  @ViewChild(Slides) slides: Slides;
  imgsource: any;
 constructor(private navCtrl: NavController,
              private eventsService: EventsService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              private alertCntrl: AlertController,
              angFire: AngularFireOfflineDatabase,
              public zone: NgZone,
              
              ) {
                 this.homeslides= angFire.list('data/home');
                 this.navCtrlView=navCtrl;
              }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }

  navPage(home_slide,page,desc,header){
    this.pages=page;
    if("EventDetailsPage"==page){
      this.pages=EventDetailsPage;
    }
    else if ("ArticlesPage"==page){
 this.pages=ArticlesPage;
    }
    else if("QuotesPage"==page){
 this.pages=QuotesPage;
    }
this.navCtrlView.push(this.pages,{
	firstParamName: home_slide,
secondParamName: desc,
thirdParamName:header
});
  }
  
    
    

}
