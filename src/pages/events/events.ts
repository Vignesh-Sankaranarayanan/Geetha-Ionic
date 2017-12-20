import { Component,OnInit,NgZone } from '@angular/core';
//import { IonicPage } from 'ionic-angular';
import {EventDetailsPage} from '../event-details/event-details';
import {QuotesService} from '../../services/quotes';
import {EventsService} from '../../services/events';
import {EventsModel} from '../../models/eventsModel';
import firebase from 'firebase';
// for Observables

import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';

import {
  IonicPage,
  NavController,
  PopoverController,
  LoadingController,
  AlertController
} from "ionic-angular";

/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  //events: EventsModel[];

eventsBackUp: AfoListObservable<any[]>;
 events: AfoListObservable<any[]>;
 eventsDetailsPage=EventDetailsPage;
 eventsGroup: string;
firestore = firebase.storage();
  imgsource: any;
 constructor(private navCtrl: NavController,
              private eventsService: EventsService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              private alertCntrl: AlertController,
              angFire: AngularFireOfflineDatabase,
              public zone: NgZone
              ) {

                this.events = angFire.list('data/events', {
                  query: {
                  orderByChild: "id"
                  }
                  });
               
  }
  ngOnInit(){
//this.quoteCollection= this.quotes;
 }

 display() {
 
    this.firestore.ref().child("https://firebasestorage.googleapis.com/v0/b/geethamandalam-ionic2.appspot.com/o/events%2Fjpeg_bad.jpg?alt=media&token=6df4d13a-b9cf-429f-a6a4-0d48d332fe57").getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
       })
    })
  }
private handleError(errorMessage: string) {
    const alert = this.alertCntrl.create({
      title: 'An error occurred!',
      message: errorMessage,
      buttons: ['Ok']
    });
    alert.present();
  }

ionViewWillEnter() {
   // this.quotes = this.quotesService.getQuotes();
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    //this.quotes = this.quotesService.getQuotes();
  

}}
