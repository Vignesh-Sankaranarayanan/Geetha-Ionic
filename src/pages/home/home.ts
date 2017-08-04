import { Component,OnInit,NgZone } from '@angular/core';
//import { IonicPage } from 'ionic-angular';

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

  homeslides: FirebaseListObservable<any>;
 
 homeslidesGroup: string;
firestore = firebase.storage();
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
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }
display(path: string) {
 
  return  this.firestore.ref().child(path).getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
       })
    })
  }

}
