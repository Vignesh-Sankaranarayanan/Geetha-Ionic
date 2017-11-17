
import { Component,OnInit,NgZone } from '@angular/core';
//import { IonicPage } from 'ionic-angular';

import {QuotesService} from '../../services/quotes';
import {EventsService} from '../../services/events';
import {EventsModel} from '../../models/eventsModel';
import {ArticlesPage} from '../articles/articles';
import {EventDetailsPage} from '../event-details/event-details';
import {QuotesPage} from '../quotes/quotes';
import { InAppBrowser } from 'ionic-native';

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
  NavController,
  NavParams,
  PopoverController,
  LoadingController,
  AlertController
} from "ionic-angular";
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
