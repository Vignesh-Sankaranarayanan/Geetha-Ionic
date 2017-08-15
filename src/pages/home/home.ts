import { Component,OnInit,NgZone } from '@angular/core';
//import { IonicPage } from 'ionic-angular';

import {QuotesService} from '../../services/quotes';
import {EventsService} from '../../services/events';
import {EventsModel} from '../../models/eventsModel';
import firebase from 'firebase';
 import {  ViewChild } from '@angular/core';
 import {Slides} from 'ionic-angular'
import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';
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
homeslides: FirebaseListObservable<any>;
 slide: any;
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
             angFire: AngularFireDatabase,
              public zone: NgZone,
              
              ) {
                 this.homeslides= angFire.list('data/home');
                 this.navCtrlView=navCtrl;
              }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }

  navPage(home_slide,page,desc){
this.navCtrlView.push(page,{
	firstParamName: home_slide,
secondParamName: desc,
thirdParamName:"header"
});
  }
  
    
    

}
