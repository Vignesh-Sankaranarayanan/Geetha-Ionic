import { Component,OnInit,NgZone } from '@angular/core';
//import { IonicPage } from 'ionic-angular';
import {EventDetailsPage} from '../event-details/event-details';
import {QuotesService} from '../../services/quotes';
import {EventsService} from '../../services/events';
import {EventsModel} from '../../models/eventsModel';
import firebase from 'firebase';
// for Observables
import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';

import {
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


 events: FirebaseListObservable<any>;
 eventsDetailsPage=EventDetailsPage;
 eventsGroup: string;
firestore = firebase.storage();
  imgsource: any;
 constructor(private navCtrl: NavController,
              private eventsService: EventsService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              private alertCntrl: AlertController,
              angFire: AngularFireDatabase,
              public zone: NgZone
              ) {

                this.events= angFire.list('data/events');
               /* this.eventsService.fetchList()
                  .subscribe(
                    (list: EventsModel[]) => {
                      
                      if (list) {
                        this.events = list;
                      } else {
                        this.events = [];
                      }
                    },
                    error => {
                     
                      this.handleError(error.json().error);
                    }
                  );
*/
               
  }
  ngOnInit(){
//this.quoteCollection= this.quotes;
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
