import { Component,OnInit,NgZone } from '@angular/core';
//import { IonicPage } from 'ionic-angular';

import {QuotesService} from '../../services/quotes';
import {EventsService} from '../../services/events';
import {EventsModel} from '../../models/eventsModel';
import {ArticlesPage} from '../articles/articles';
import {EventDetailsPage} from '../event-details/event-details';
import {QuotesPage} from '../quotes/quotes';
import { InAppBrowser } from 'ionic-native';
import {AboutPage} from '../about/about';

import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import firebase from 'firebase';
 import {  ViewChild } from '@angular/core';
 import {Slides,Platform} from 'ionic-angular';
//import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';
// for Observables
//import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';

import {
  IonicPage,
  NavController,
  PopoverController,
  LoadingController,
  AlertController
} from "ionic-angular";
import { TabsPage } from '../tabs/tabs';
import { SafariViewController } from '@ionic-native/safari-view-controller';
declare var window: any;
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
  aboutPage = AboutPage;
isValid="true";
//  homeslides: FirebaseListObservable<any>;
name : string;
homeslides: AfoListObservable<any[]>;
flag: AfoListObservable<any[]>;
eventsDetailsPage=EventDetailsPage;
 slide: any;
 pages: any;
 item: string;
 homeslidesGroup: string;
 rootPage = TabsPage;
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
              public platform: Platform,
              private safariViewController: SafariViewController,
              
              ) {
                 this.homeslides= angFire.list('data/home');
                 this.flag=angFire.list('data/HomePageTestData');
                 this.navCtrlView=navCtrl;
              }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    /*this.slides.startAutoplay();
    this.platform.ready().then(_ =>{
      
      window.FCMPlugin && window.FCMPlugin.onNotification(data =>{
        this.zone.run(()=> {
          this.name = data.name;
        })
      });
    });
    */
  
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
	fourthParamName: home_slide,
secondParamName: desc,
thirdParamName:header
});
  }
  Donate(){
    this.platform.ready().then(() => {
      let browser = new InAppBrowser("http://geethamandalam.org/donation--more-information.html",'_blank');
  });
  }

  openweb()
  {
    window.open('http://geethamandalam.org/donation--more-information.html', '_system', 'location=yes'); return false;
  }
    
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
      this.slides.startAutoplay();
  }
}
